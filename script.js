document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.side').classList.toggle('sidego');
    if (document.querySelector('.side').classList.contains('sidego')) {
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.ham').style.display = 'inline'
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>
        {
            document.querySelector('.cross').style.display = 'inline';

        },350)

    }
})


  