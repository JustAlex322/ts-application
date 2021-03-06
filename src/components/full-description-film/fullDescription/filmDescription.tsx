import { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { GetFullDescriptionResponseType } from "../../../api/api-types";
import ImgWithPreloader from "../../../common/imgWithPreloader";
import ModalWindowWithVideo from "../../../common/modalWinwodWithVIdeo";
import Preloader from "../../../common/Preloader";
import { ThunkType } from "../../../redux/reducer/films-header-reducer";
import { VisibleCardsType } from "../../main/mainContainer";
import "./full-description.scss"

interface GetFullDescriptionPropsT {
    data: GetFullDescriptionResponseType | null
    videoIdForYoutube: string
    setTrailerURL: (id: string | undefined) => ThunkType
    dispatch: Dispatch<ThunkType>
    isLoading: boolean
}

const FullDescription: React.FC<GetFullDescriptionPropsT> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    if (props.data === null) {
        return <Preloader />
    }
    const getTrailerURL = () => {
        props.dispatch(props.setTrailerURL(props.data?.id))
        setVisible(true)
    }
    const getActorLinkArr: VisibleCardsType = props.data.starList.map(el => <div className="link__actors-or-films">
        <NavLink className="" to={`/actor/${el.id}`}>{el.name}</NavLink>
    </div>)
    const date = new Date(props.data.releaseDate);
    return (
        <div className="full-description__wrapper">
            <div className="full-description__name">
                <span >
                    {props.data.fullTitle || props.data.title}
                </span>
            </div>
            <div className="full-description__data">
                <div className="full-description__image">
                    <ImgWithPreloader URL={props.data.image} />
                </div>
                <div className="full-description__text-description">
                    <span className="description-title">
                        <span className="full-description__item">Дата Релиза : </span><span className="full-description__item-text">{date.toLocaleDateString()}</span>
                    </span>
                    <span className="full-description__imdbRating description-title">
                        <span className="full-description__item">Рейтинг на IMDB : </span><span className="full-description__item-text">{props.data.imDbRating}</span>
                    </span>
                    <span className="full-description__mcRating description-title">
                        <span className="full-description__item">Рейтинг на MetaCritic : </span><span className="full-description__item-text">{props.data.metacriticRating}</span>
                    </span>
                    <span className="full-description__descr description-title">
                        <span className="full-description__item">Описание : </span>
                        <span className="full-description__item-text">{props.data.plotLocal?.length ? props.data.plotLocal : props.data.plot}
                        </span>
                    </span>
                    <div className="full-description__navLinks full-description__item">
                        <span >
                            Актеры которые снимались в {props.data.fullTitle} :
                        </span>
                        {getActorLinkArr}
                    </div>
                    <div className="full-description__trailer-btn">
                        <button className="button upgrade-button" onClick={getTrailerURL}>Посмотреть Трейлер</button>
                    </div>
                </div>
            </div>
            {visible ? <ModalWindowWithVideo videoIdForYoutube={props.videoIdForYoutube} closeModal={setVisible} isLoading={props.isLoading}/> : null}
        </div>
    )
}

export default FullDescription