// console.log("Project started successfully 🚀");
// console.log("lets start");

const form = document.getElementById('queryForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value.trim();

  if (!title || !description) {
    alert("Please fill in all fields.");
    return;
  }

  const query = { title, category, description, submittedAt: new Date().toLocaleString() };
  console.log('Query Submitted:', query);
  alert("Query submitted successfully!\nTitle: " + title + "\nCategory: " + category);

  // Optional: Save to localStorage
  const savedQueries = JSON.parse(localStorage.getItem('queries') || '[]');
  savedQueries.push(query);
  localStorage.setItem('queries', JSON.stringify(savedQueries));

  form.reset();
});
