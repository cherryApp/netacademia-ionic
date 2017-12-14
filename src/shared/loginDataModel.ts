export class loginDataModel {
  email: string;
  password: string;
  meta?: object;

  constructor(meta?: object) {
    if (meta) {
      this.meta = meta;
    }
  }
}

/* Test data:
  nagy.gergo@3pixel.hu
  Puffer1234
*/
