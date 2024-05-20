export function generatePostData(): {
  id?: string;
  title: string;
  content: string;
  slug: string;
  picture: string;
  user: number;
} {
  // Генерация случайного заголовка поста
  const title = Array.from({ length: 10 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join("");

  // Генерация случайного содержимого поста
  const content = Array.from({ length: 100 }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");

  // Генерация случайного slug
  const slug = Array.from({ length: 10 }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");

  // Генерация случайного URL изображения
  const picture = `https://via.placeholder.com/150/${slug}`;

  // Генерация случайного идентификатора пользователя
  const user = Math.floor(Math.random() * 100) + 1;

  // Возвращаем объект с данными поста
  return {
    title,
    content,
    slug,
    picture,
    user,
  };
}
