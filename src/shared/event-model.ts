export class EventModel {
  id?: string;
  $id: string;
  name: string;
  date: string; // na ezt azert prodban ezt szebben kene :)
  pictureURL: string;
  description: string;
  tickets: { [key: string]: string };
  $key?: string;

  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);

      if (!this.$id) {
        this.$id = param.$key;
      }

      if (!this.tickets) {
        this.tickets = {};
      }

      const $idPropertyDescriptior = Object.getOwnPropertyDescriptor(this, '$id');
      $idPropertyDescriptior.enumerable = false;
      Object.defineProperty(this, '$id', $idPropertyDescriptior);
    }
  }
}
