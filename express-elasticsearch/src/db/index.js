const { Client } = require("@elastic/elasticsearch");

class Elastic {
  constructor(node, dataIndex, dataMapping, data) {
    this.node = node;
    this.dataIndex = dataIndex;
    this.dataMapping = dataMapping;
    this.data = data;
    this.init();
  }

  /**
   * create init elasticsearch properties, create index, mapping, push data to created index or do nothing if index already exist
   */
  async init() {
    this.client = new Client({
      node: this.node,
    });
    this.isDataLoaded = await this.createIndex(this.dataIndex, this.dataMapping);
    if (!this.isDataLoaded) {
      await this.addBulkDocuments(this.dataIndex, this.data);
    }

  }

  /**
   * create index named data if no exist
   * @param {String} index
   * @param {{properties: {}}} mapping key: String
   * @returns {Promise<boolean>}
   */
  async createIndex(index, mapping) {
    const body = mapping;
    try {
      const resultCreate = await this.client.indices.create({ index });
      const resultMapping = await this.client.indices.putMapping({ index, body });
      console.log({resultCreate});
      console.log({ resultMapping });
      console.log("index has been successfully created");
      return false;
    } catch (err) {
      const errorText = `${err}`;
      if (errorText.includes("resource_already_exists_exception")) {
        console.log("Index already exist");
      } else {
        console.log("failed to create index!");
      }
      return true;
    }
  }

  /**
   * @param {String} index
   * @param {Array<{id: String, name: String}>} dataset 
   * @returns {Promise<void>}
   */
  async addBulkDocuments(index, dataset) {
    console.log({dataset});
    try {
      const body = dataset.flatMap(doc => [{ index: { _index: index } }, doc]);
      const { body: response } = await this.client?.bulk({
        refresh: true,
        body
      });
      console.log({ response });
      console.log("data has been successfully added to index");
    } catch (err) {
      console.log({err});
      console.log("failed to add data to index");
    }
  }

}

module.exports = Elastic;