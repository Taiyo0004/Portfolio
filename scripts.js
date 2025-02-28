document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chatToggle");
    const chatModal = document.getElementById("chatModal");
    const chatClose = document.getElementById("chatClose");
    const loadingSpinner = document.getElementById("loadingSpinner");

    if (!chatToggle || !chatModal || !chatClose || !loadingSpinner) {
        console.error("One or more chatbot elements are missing from the DOM.");
        return;
    }

    const openChat = () => {
        chatModal.classList.add("show"); // Instead of changing display directly
        loadingSpinner.style.display = "flex";

        setTimeout(() => {
            loadingSpinner.style.display = "none";
        }, 1500);
    };

    const closeChat = () => {
        chatModal.classList.remove("show"); // Hide using CSS class
    };

    chatToggle.addEventListener("click", () => {
        chatModal.classList.toggle("show"); // Toggle visibility
        if (chatModal.classList.contains("show")) {
            openChat();
        }
    });

    chatClose.addEventListener("click", closeChat);
});

