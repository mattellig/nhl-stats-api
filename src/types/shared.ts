export interface NHLSocialMedia {
    twitter?: string[]
    facebook?: string[]
    instagram?: string[]
    vine?: string[]
    periscope?: string[]
    youtube?: string[]
    pinterest?: string[]
    googleplus?: string[]
    snapchat?: string[]
}

export interface NHLStatsType {
    displayName: string
    gameType: null | {
        id: string
        description: string
        postseason: boolean
    }
}
