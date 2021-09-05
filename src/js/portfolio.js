const removeFiltersActiveClass = filters => {
  filters.forEach(item => {
    if (item.classList && item.classList.contains('btn--border')) {
      item.classList.remove('btn--border', 'btn--border-text-blue')
    }
  })
}

const filterPortfolio = () => {
  const filtersNav = document.querySelectorAll(
    '.portfolio__filters-item > button'
  )
  filtersNav.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.filter
      const items = document.querySelectorAll('.portfolio__item')
      let singleItem

      removeFiltersActiveClass(filtersNav)

      item.classList.add('btn--border', 'btn--border-text-blue')
      items.forEach(galleryItem => {
        singleItem = galleryItem
        singleItem.style.display =
          category === '*' || galleryItem.classList.contains(category)
            ? 'flex'
            : 'none'
      })
    })
  })
}

const createItem = param => {
  const portfolioItemsContainer = document.querySelector('.portfolio__items')
  const loadMoreButton = document.querySelector('.portfolio__item--load-more')
  const template = document.querySelector('.portfolio-item-template')
  const portfolioItem = template.content.cloneNode(true)
  const { title, desc, category, image, links } = param
  const categoryArray = category.split(' ')
  portfolioItem
    .querySelector('.portfolio__item')
    .classList.add(...categoryArray)
  portfolioItem
    .querySelector('.portfolio__item-photo')
    .setAttribute('src', `./images/works/${image}`)
  portfolioItem
    .querySelector('.portfolio__item-photo')
    .setAttribute('alt', title)
  portfolioItem.querySelector('.portfolio__item-title').textContent = title
  portfolioItem.querySelector('.portfolio__item-desc').textContent = desc
  portfolioItem
    .querySelectorAll('.portfolio__item-list-item > a')
    .forEach((el, i) =>
      el.setAttribute('href', i === 0 ? links.github : links.live)
    )
  portfolioItemsContainer.insertBefore(portfolioItem, loadMoreButton)
}

const fetchProjects = async () => {
  try {
    const response = await fetch(process.env.PORTFOLIO_PROJECTS_URL)
    const json = await response.json()
    return json
  } catch (err) {
    console.log(err)
    return false
  }
}

const removeLoadMoreButton = () => {
  const portfolioItemsContainer = document.querySelector('.portfolio__items')
  const loadMoreButton = document.querySelector('.portfolio__item--load-more')
  return portfolioItemsContainer.removeChild(loadMoreButton)
}

let start = 1
const loadPortfolioProjects = (step = 2) => {
  let stop
  fetchProjects().then(data => {
    stop = data.length
    data
      .filter(item => item.id >= start && item.id < start + step)
      .map(item => createItem(item))
    start += step

    if (start >= stop) removeLoadMoreButton()
  })
}

export { filterPortfolio, loadPortfolioProjects }
