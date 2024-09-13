function fetchUsername() {
    fetch('/api/username')
        .then(response => response.json())
        .then(data => {
            document.getElementById('username').innerText = data.username;
        });
}