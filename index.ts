let focusButton = document.getElementById("focus") as HTMLButtonElement

let buttons: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLButtonElement>(".btn")

let shortBreakButton = document.getElementById("shortbreak") as HTMLButtonElement

let longBreakButton = document.getElementById("longbreak") as HTMLButtonElement

let startbtn = document.getElementById("btn-start") as HTMLButtonElement

let reset = document.getElementById("btn-reset") as HTMLButtonElement

let pause = document.getElementById("btn-pause") as HTMLButtonElement

let time = document.getElementById("time") as HTMLButtonElement

let set: number | undefined

let count: number = 59

let paused: boolean = true

let active: string = "focus"

let minCount: number = 24


time.textContent = `${minCount + 1}:00`

const appendZero = (value: number): string => {
    return value < 10? `0${value}`: value.toString()
}

const pauseTimer = (): void => {
    paused = true

    if (set !== undefined) {

        clearInterval(set)
    }

    if(startbtn) startbtn.classList.remove("hide")
    if(pause) pause.classList.remove("show")
    if(reset) reset.classList.remove("show")        
                
}

const removeFocus = (): void => {
    buttons.forEach((btn: HTMLElement) => {
        btn.classList.remove("btn-focus")
    })
}

focusButton?.addEventListener("click", () => {
    removeFocus()

    if (focusButton) focusButton.classList.add("btn-focus")

        pauseTimer()

        minCount = 24
        count = 59
        
        if (time) time.textContent = `${minCount + 1}:00`
})

shortBreakButton?.addEventListener("click", () => {
    active = "short"
    removeFocus()

    if (shortBreakButton) shortBreakButton.classList.add("btn-focus")

        pauseTimer()

        minCount = 4
        count = 59

        if (time) time.textContent = `${minCount + 1}:00`
})

longBreakButton?.addEventListener("click", () => {
    active = "long"

    removeFocus()

    if (longBreakButton) longBreakButton.classList.add("btn-focus")

        pauseTimer()

        minCount = 14 
        count = 59

        if (time) time.textContent = `${minCount + 1}:00`
})


pause?.addEventListener("click", () => {
    pauseTimer()
})

startbtn?.addEventListener("click", () => {
    if (reset) reset.classList.add("show")
    if (pause) pause.classList.add("show")
    if (startbtn) startbtn.classList.add("hide")
        
        if (paused) {
            paused = false

            if (time) time.textContent = `${appendZero(minCount)}: ${appendZero(count)}`

            set = window.setInterval(() => {
                count--

                if (time) time.textContent = `${appendZero(minCount)}: ${appendZero(count)}`

                if (count === 0) {
                    if (minCount !== 0) {
                        minCount--
                        count = 59
                    } else {
                        clearInterval(set)
                    }
                }
            }, 1000)
        }
})

reset?.addEventListener("click", () => {
    pauseTimer()
    minCount = 24
    count = 59

    if (time) time.textContent = `${minCount +1}:00`

    if (reset) reset.classList.remove("show")
    if (pause) pause.classList.remove("show")
    if (startbtn) startbtn.classList.remove("remove")        
});