const element = document.createElement('div');

element.classList.add('jumbotron');
element.classList.add('jumbotron-fluid');
element.innerHTML =
`<div class="container">
<h1 class="display-3">RSS Reader</h1>
<form>
<div class="form-group">
<label for="rss">Добавьте rss поток</label>
<input type="text" class="form-control" id="rss" aria-describedby="emailHelp" placeholder="add rss feed">
</div>
<button type="submit" class="btn btn-primary">Добавить</button>
</form>
</div>`;

export default element;
