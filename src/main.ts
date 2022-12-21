import './styles/global.scss'
import './styles/main.scss'

const toastButtons = document.querySelectorAll<HTMLButtonElement>('[data-element="toast-button"]')
const toasts = document.querySelectorAll<HTMLDivElement>('[data-element="toast"]')

function showToast(toastId: string) {
    toasts.forEach(toast => {
        if (toast.id === toastId) {
            toast.classList.add('show')

            setTimeout(() => {
                toast.classList.remove('show')
            }, 5000)
        }
    })
}

function hideToast() {
    toasts.forEach(toast => {
        const hideToastButton = toast.querySelector('button')

        if (toast.classList.contains('show')) {
            hideToastButton?.addEventListener('click', () => {
                toast.classList.remove('show')
            })
        }
    })
}

toastButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case "success":
                showToast(button.id)
                break;
            case "fail":
                showToast(button.id)
                break;
            case "warning":
                showToast(button.id)
                break;
            case "help":
                showToast(button.id)
                break;
            default:
                break;
        }

        hideToast()
    })
})

