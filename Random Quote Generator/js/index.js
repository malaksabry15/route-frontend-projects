
var current=-1;
function Quotes(){
    var New;
    var arr=[
        {
            Quote:'"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."',
            author:"--Bill Keane"
        },
        {
            Quote:'"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."',
            author:"--Albert Einstein"
        },
        {
            Quote:"'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'",
            author:"-- Bernard M. Baruch"
        },
        {
            Quote:'"Be yourself; everyone else is already taken."',
            author:"--Oscar Wilde"
        },
        {
            Quote:"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
            author:"--Albert Einstein"
        },
        {
            Quote:'"Be the change that you wish to see in the world."' ,
            author:"--Mahatma Gandhi"
        },
        {
            Quote:"'In three words I can sum up everything I've learned about life: it goes on.'",
            author:"--Robert Frost"
        },
        {
            Quote:'"A friend is someone who knows all about you and still loves you."',
            author:"--Elbert Hubbard"
        },
        {
            Quote:'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
            author:"--Martin Luther King"
        },
        {
            Quote:"'I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.'",
           author:"--Marilyn Monroe"
        }
    ]
   do{
   New= Math.floor(Math.random()*arr.length);
   }while(New==current)
    current=New
    document.getElementById('demo').innerHTML=arr[New].Quote
    document.getElementById('demo1').innerHTML=arr[New].author
    
    
}


