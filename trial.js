let btn = document.querySelector('#newQuote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Note that in Quote_list we have used objects inside the arrays

const Quote_list = [
    {
      quote: '"The best way to find yourself is to lose yourself in the service of others"',
      person: 'Mahatma Gandhi'
    },
    {
      quote: '"In the middle of difficulty lies opportunity"',
      person: 'Albert Einstein'
    },
    {
      quote: '"The only way to do great work is to love what you do"',
      person: 'Steve Jobs'
    }, 
    {
      quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts"',
      person: 'Winston Churchill'
    },
    {
      quote: '"Believe you can and you\'re halfway there"',
      person: 'Theodore Roosevelt'
    },
    {
      quote: '"The future belongs to those who believe in the beauty of their dreams"',
      person: 'Eleanor Roosevelt'
    },
    {
      quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall"',
      person: 'Nelson Mandela'
    },
    {
      quote: '"The only limit to our realization of tomorrow will be our doubts of today"',
      person: 'Franklin D. Roosevelt'
    },
    {
      quote: '"The secret of getting ahead is getting started"',
      person: 'Mark Twain'
    },
    {
      quote: '"Your time is limited, don\'t waste it living someone else\'s life"',
      person: 'Steve Jobs'
    }
  ];

  let i = 0;
  

btn.addEventListener('click', function(){
    
    if( i > Quote_list.length)
    {
        i=0;
        quote.innerText = Quote_list[i].quote;
        person.innerText = Quote_list[i].person;
    }
    else{
        i++;
        quote.innerText = Quote_list[i].quote;
        person.innerText = Quote_list[i].person;
    }
   

})