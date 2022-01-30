import { SetActorInfo, SetTrailerURL } from './../types/fims-types';
import { GetActorInfoResponseType, GetFullDescriptionResponseType } from './../../../api/api-types';
import { GetStartFilmsItemType } from "../../../api/api-types"
import * as FilmsTypes from "../types/fims-types"


export const setUserInput = (userInput: string) : FilmsTypes.SetUserInputType => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_USER_INPUT,
        userInput,
    }
}

export const setStartFilms = (startFilms : Array<GetStartFilmsItemType>) : FilmsTypes.SetStartFilms => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_START_FILMS,
        startFilms,
    }
}

export const setUserFilms = (userFilms : Array<GetStartFilmsItemType>) : FilmsTypes.SetUserFilms => {
    return {
        type: FilmsTypes.FilmsActionTypes.SET_USER_FILMS,
        userFilms
    }
}

export const setFullDescription = (fullDescr : GetFullDescriptionResponseType) : FilmsTypes.SetFullDescription => {
    return {
        type: FilmsTypes.FilmsActionTypes.SET_FULL_DESCRIPTION,
        fullDescr
    }
}

export const setActorInfo = (actorInfo : GetActorInfoResponseType) : SetActorInfo => {
    return {
        type: FilmsTypes.FilmsActionTypes.SET_ACTOR_INFO,
        actorInfo
    }
}

export const setTrailerUrl = (trailerURL: string) : SetTrailerURL => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_TRAILER_URL,
        trailerURL
    }
}