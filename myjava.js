import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://grbasrjurjvoglxkseia.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYmFzcmp1cmp2b2dseGtzZWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTQ5NzgsImV4cCI6MjAyNjM3MDk3OH0.txJGvXaPIITIiV1FpDwdviGpw0o0dOU2RDHnMqPDTmU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books) {
      let bookList = document.getElementById('books');
      bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
  
}
getBooks();