const reg = document.getElementById('nav1')
const complete = document.getElementById('nav2')
const postp = document.getElementById('nav3')
// const Blog = document.getElementById('nav4')

//switching tab display
const regEl = document.getElementsByClassName('registered')
const complC = document.getElementsByClassName('completed_course')
const postP = document.getElementsByClassName('postponed_course')
// const blog = document.getElementsByClassName('Blog')
Array.from(regEl).forEach(a => {
  a.style.display = 'table'
  reg.classList.add('active')
})
reg.addEventListener('click', () => {
  console.log(true);
  Array.from(regEl).forEach(a => {
    a.style.display = 'table'
    reg.classList.add('active')

  })
  Array.from(complC).forEach(a => {
    a.style.display = 'none'
    complete.classList.remove('active')

  })
  Array.from(postP).forEach(a => {
    a.style.display = 'none'
    postp.classList.remove('active')

  })

})
complete.addEventListener('click', () => {
  console.log(true);
  Array.from(regEl).forEach(a => {
    a.style.display = 'none'
    reg.classList.remove('active')

  })
  Array.from(complC).forEach(a => {
    a.style.display = 'table'
    complete.classList.add('active')

  })
  Array.from(postP).forEach(a => {
    a.style.display = 'none'
    postp.classList.remove('active')

  })

})
postp.addEventListener('click', () => {
  console.log(true);
  Array.from(regEl).forEach(a => {
    a.style.display = 'none'
    reg.classList.remove('active')

  })
  Array.from(complC).forEach(a => {
    a.style.display = 'none'
    complete.classList.remove('active')

  })
  Array.from(postP).forEach(a => {
    a.style.display = 'table'
    postp.classList.add('active')

  })

})

//switching tab display





$("#profileImage").click((e) => {
  $("#imageUpload").click();
});

Preview = (uploader) => {
  if (uploader.files && uploader.files[0]) {
    $('#profileImage').attr('src',
      window.URL.createObjectURL(uploader.files[0]));
  }
}

$("#imageUpload").change(() => {
  Preview(this);
});