export default class FetchData {
  startUrl = "https://api.spacexdata.com/v4/";

  getResource = async (url) => {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Произошла ошибка ${result.status} `);
    }
    return await result.json();
  };

  getRocket = async () => await this.getResource(this.startUrl + "rockets");

  getLaunches = async () => await this.getResource(this.startUrl + "launches/past");

  getCompany = async () => await this.getResource(this.startUrl + "company");
}
