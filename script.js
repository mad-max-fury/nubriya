const reg = document.getElementById('nav1')
const complete = document.getElementById('nav2')
const postp = document.getElementById('nav3')
const Blog = document.getElementById('nav4')

const regEl = document.getElementsByClassName('registered')
const complC = document.getElementsByClassName('completed_course')
const postP = document.getElementsByClassName('postponed_course')
const blog = document.getElementsByClassName('Blog')
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
  Array.from(blog).forEach(a => {
    a.style.display = 'none'
    Blog.classList.remove('active')

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
  Array.from(blog).forEach(a => {
    a.style.display = 'none'
    Blog.classList.remove('active')

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
  Array.from(blog).forEach(a => {
    a.style.display = 'none'
    Blog.classList.remove('active')

  })
})
Blog.addEventListener('click', () => {
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
    a.style.display = 'none'
    postp.classList.remove('active')

  })
  Array.from(blog).forEach(a => {
    a.style.display = 'block'
    Blog.classList.add('active')

  })
})




