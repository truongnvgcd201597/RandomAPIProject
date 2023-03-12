    const createContainer = document.createElement('div');
    createContainer.className = 'container';

    document.body.style.fontFamily = 'Roboto, sans-serif';

    // STYLE
    createContainer.style.width = '100%';
    createContainer.style.height = '96vh';
    createContainer.style.display = 'flex';
    createContainer.style.justifyContent = 'center';
    createContainer.style.alignItems = 'center';
    createContainer.style.flexDirection = 'column';
    createContainer.style.backgroundColor = 'cornflowerblue';

    const createButtonClick = document.createElement('button');
    createButtonClick.className = 'button';
    createButtonClick.textContent = 'Generate quote';
    createButtonClick.style.borderRadius = '5px';
    createButtonClick.style.border = 'none';
    createButtonClick.style.padding = '10px 20px';
    createButtonClick.style.backgroundColor = '#fff';
    createButtonClick.style.color = 'cornflowerblue';
    createButtonClick.style.fontSize = '1.2rem';
    createButtonClick.style.fontWeight = 'bold';
    createButtonClick.style.cursor = 'pointer';

    const createQuote = document.createElement('div');
    createQuote.className = 'quote';
    createQuote.style.width = '50%';
    createQuote.style.display = 'flex';
    createQuote.style.justifyContent = 'center';
    createQuote.style.alignItems = 'center';
    createQuote.style.backgroundColor = '#fff';
    createQuote.style.borderRadius = '5px';
    createQuote.style.padding = '20px';
    createQuote.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    createQuote.style.color = 'cornflowerblue';
    createQuote.style.fontSize = '1.2rem';
    createQuote.style.fontWeight = 'bold';
    createQuote.style.textAlign = 'center';
    createQuote.style.marginTop = '20px';
    createQuote.style.display = 'none';
    createQuote.style.transition = 'all 0.5s ease-in-out';


    // ADD
    createContainer.appendChild(createButtonClick);
    createContainer.appendChild(createQuote);
    document.body.appendChild(createContainer);

    //QUERY
    const buttonClicked = document.querySelector('.button');
    buttonClicked.addEventListener('click', GenerateQuote);

    // async function GenerateQuote(){
    // let categoriesList = ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty',
    //     'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage',
    //     'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality', 'experience',
    //     'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship',
    //     'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history',
    //     'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership',
    //     'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
    // ]
    // const randomCategories = categoriesList[Math.floor(Math.random() * categoriesList.length)];
    //    const options = {
    //     method: 'GET',
    //     headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq'},
    //     contentType: 'application/json',
    //    }
    //    const respone = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategories}`, options);
    //    const data = await respone.json();

    //    const author = document.createElement('h3');
    //    author.className = 'author-name';
    //    author.textContent = data[0].author;

    //    const quote = document.createElement('p');
    //    quote.className = 'author-slag';
    //    quote.textContent = `"${data[0].quote}"`;
    //    quote.style.fontStyle = 'italic';

    //    const category = document.createElement('p');
    //    category.className = 'author-slag';
    //    category.textContent = `Category:${data[0].category}`;
    //    category.style.fontSize = '1rem';
    //    category.style.fontStyle = 'italic';
    //    category.style.textAlign = 'right';
    //    category.style.color = 'lightblue'
    //    category.style.fontWeight = 'light';

    //    //append child by array destructuring
    //    createQuote.style.display = 'block';
    //    createQuote.append(author, quote, category);
    // }
    async function GenerateQuote(){
        let categoriesList = ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty',
            'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage',
            'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality', 'experience',
            'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship',
            'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history',
            'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership',
            'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
        ];
        const randomCategories = categoriesList[Math.floor(Math.random() * categoriesList.length)];
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.api-ninjas.com/v1/quotes?category=${randomCategories}`, true);
        xhr.setRequestHeader('X-Api-Key', 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq');
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const author = document.createElement('h3');
            author.className = 'author-name';
            author.textContent = data[0].author;
    
            const quote = document.createElement('p');
            quote.className = 'author-slag';
            quote.textContent = `"${data[0].quote}"`;
            quote.style.fontStyle = 'italic';
    
            const category = document.createElement('p');
            category.className = 'author-slag';
            category.textContent = `Category:${data[0].category}`;
            category.style.fontSize = '1rem';
            category.style.fontStyle = 'italic';
            category.style.textAlign = 'right';
            category.style.color = 'lightblue'
            category.style.fontWeight = 'light';
    
            //append child by array destructuring
            createQuote.style.display = 'block';
            createQuote.append(author, quote, category);
        } else {
            console.log('Error occurred while fetching data.');
        }
        };
        xhr.send();
    }