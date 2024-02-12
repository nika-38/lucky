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
    main: "あなたの性格は？",
    answers: [
        {
            main: "明るい性格",
            question:{
                main: "よくかわいいと言われる？",
                answers:[
                    {
                        main: "みんなのアイドル(⋈◍＞◡＜◍)。✧♡", 
                        question:{
                            main:"剣と弓ならどっちが得意？",
                            answers:[
                                {
                                    main:"剣！！",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                            main:"",
                                            fortune:"",
                                            
                                        }                

                                        ]
                                        
                                    }
                                    
                                },
                                {
                                    main:"弓！！",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                        
                                    }
                                    
                                }
                            ]
                        }
                    },
                    {
                        main:"いや特には(・・?",
                        question:{
                            main:"戦闘力は高い？",
                            answers:[
                                {
                                    main:"俺は不死身だぜ(｀･ω･´)",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                        
                                    }
                                },
                                {
                                    main:"逃げるが勝ちだろ！‥…━━━ﾀﾀﾀﾀﾍ( -∀-)ﾉ",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                        
                                    }
                                }
                            ]
                        }                        
                    }
                ] 


            } 
        },
        {            
            main: "落ち着いてるかな", 
            question: {
                main: "カリスマ性がある？", 
               answers:[
                    {
                        main: "みんなのカリスマとは私のこと(*・∀-)ｂ", 
                        question:{
                            main:"あなたはドジっ子？",
                            answers:[
                                {
                                    main:"ちょっとドジかも(/ω＼)ﾊｽﾞｶｼｲ",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                    }
                                    
                                },
                                {
                                    main:"自分で言うのもなんだが抜け目ない性格だ(*^-^*)",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        main:"そんなことありません((-ω-｡)(｡-ω-))ﾌﾙﾌﾙ",
                        question:{
                            main:"あなたはパワータイプ？",
                            answers:[
                                {
                                    main:"筋肉は全てを解決するᕙ( ･´ｰ･｀)ᕗﾑｷｯ",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                    }
                                },
                                {
                                    main:"パワーより技術だろﾌﾌﾌf （￣+ー￣）ｷﾗｰﾝ☆",
                                    question:{
                                        main:"結果をみる！",
                                        answers:[
                                            {
                                                main:"",
                                                fortune:"",
                                            }

                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ] 
            }
        }
    ]
}