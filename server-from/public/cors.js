fetch(
    'http://localhost2:3001',
    {
        headers: {
            'myheader': '123'
        }
    }
)
.then(response => response.text())
.then(document.write.bind(document));

