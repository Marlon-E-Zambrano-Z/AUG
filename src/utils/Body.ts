export const setBackgroundGradientDiagonal = 
(primaryColor : string, secondColor: string) => document.body.style.background = `linear-gradient(to bottom right, ${primaryColor}, ${secondColor})`

export const setMinHeight = (height : string) => document.body.style.minHeight = `${height}`