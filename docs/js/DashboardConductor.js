function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}


showNotification();


function showNotificationIcon() {
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.classList.add('active');
}

// Llama a showNotificationIcon() cuando llegue una nueva notificación
showNotificationIcon();
