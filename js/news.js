const loadNewsCategory=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res =>res.json())
    .then(data =>displayNewsCategory(data.data.news_category))
}

const displayNewsCategory=(categories)=>{
const newsContainer=document.getElementById('news-container');
categories.forEach(category => {
    console.log(category);
    const newsUl=document.createElement('ul');
    newsUl.classList.add('nav');
    newsUl.innerHTML=`
            <li class="nav-item">
                      <button onclick="searchnews('${category.category_id}')">${category.category_name}</button>
            </li>
    `
    newsContainer.appendChild(newsUl);
});
}


const searchnews=(id)=>{
const url=`https://openapi.programming-hero.com/api/news/category/${id}`;
fetch(url)
.then(res =>res.json())
.then(data =>displaySearchNews(data.data))
}

const displaySearchNews=(category)=>{
    const shownewsContainer=document.getElementById('shownews-container');
    for(const cat of category){
        console.log(cat);
        const showNewsDiv=document.createElement('div');
        showNewsDiv.classList.add('col')
        showNewsDiv.innerHTML=`
        <div class="card">
                    <img src="${cat.image_url
                    }" class="img-thumbnail" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${cat.title
                      }</h5>
                      <p class="card-text">${cat.details.slice(0,250)
                      }</p>
                      <div class="d-flex flex-row justify-content-between align-items-center rounded">
                         
                      <div class="col-lg-3">
                         <div class="d-flex flex-row align-items-center justify-content-center">
                            <img class="rounded-circle" src="${cat.author.img}" style="width:10%">
                            <div  class="ms-3">
                              <h6>${cat.author.name?cat.author.name:'no name found'}</h6>
                              <p>${cat.author.published_date}</p>
                            </div>
                          </div>
                       </div>
                          
                       <div class="col-lg-3">
                        <span class="d-flex justify-content-center align-items-center">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <p class="ms-2">${cat.total_view?cat.total_view:'no data found'}</p>
                        </span>
                      </div>

                       <div class="col-lg-3">
                        <span class="d-flex justify-content-center align-items-center">
                          <i class="fa-solid fa-star-half-stroke"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </span>
                      </div>
                      
                      <div class="col-lg-3">
                        <span class="d-flex justify-content-end align-items-center">
                        <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </div> 

                    </div>
                    </div>
                  </div>
        `;
        shownewsContainer.appendChild(showNewsDiv);
    }

}
loadNewsCategory();