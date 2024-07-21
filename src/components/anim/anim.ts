export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i: number) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.03 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export const slide = {
    initial: {
        y: "100vh"
    },
    open: {
        y: 0,
        transition: {duration: 1}
    },
    closed: {
        y: -100,
        transition: {duration: .5, delay: 0.2}
    }
  };