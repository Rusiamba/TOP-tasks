export function filterBy(tasks, filterCallback) {
  return tasks.filter(filterCallback);
}

export function containsText(data, search) {
  // обрезаем все пробелы и делаем нижний регистр тому что вводим в поле
  const clean = search.trim().toLowerCase();
  // ищем такие же элементы в уже добавленных задачах
  return data.toLowerCase().includes(clean);
}

export function filterByText(tasks, text) {
  return filterBy(tasks, (o) => containsText(o.value, text));
}
