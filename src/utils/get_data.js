export default async function getData(url) {
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      console.error(error);
    }
}
