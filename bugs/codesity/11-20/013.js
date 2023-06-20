document.body.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`

const lis = document.querySelectorAll("li") // querySelectorAll returns NodeList(e.g. nodeList can't be mapped)

lis.forEach((li) => {
  const updatedText =
    li
    .innerText
    .replace("Item", "Element")

  li.innerText = updatedText
})

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2F2da281dc-b213-448d-b3d2-4b90f901b93f/1/010701884fc159ff-2d3da5c0-f406-42ca-a877-fbe5f27c0e51-000000/v-gTaCBLvnocqK08x9_ubFLYSg8=104