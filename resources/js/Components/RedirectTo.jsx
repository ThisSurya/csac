export function RedirectTo(stringRoute){
    setTimeout(
        () => {
            window.location.href = route(stringRoute)
        }, 1000
    )
};
