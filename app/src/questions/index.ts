export type tQuestion = {
    main: string, 
    answers: tAnswer[]
}

export type tAnswer = {
    main: string,
    question?: tQuestion
    fortune?: string, 
}


export const questionTree:tQuestion={
    main: "今日の調子は？",
    answers: [
        {
            main: "良い！",
            question:{
                main: "あ",
                answers:[
                    {
                        main: "あああ", 
                        fortune: "ラッキー"
                    }
                ] 


            } 
        }, 
        {
            main: "悪い", 
            question: {
                main: "い」", 
               answers:[
                    {
                        main: "いいい", 
                        fortune: "ラッキー"
                    }
                ] 
            }
        }
    ]
}