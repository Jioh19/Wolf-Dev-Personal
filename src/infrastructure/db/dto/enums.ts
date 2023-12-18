export enum NetworkName {
  FACEBOOK = 'Facebook',
  LINKEDIN = 'LinkedIn',
  GITHUB = 'Github',
  INSTAGRAM = 'Instagram',
}

export interface SocialNetwork {
  networkName: NetworkName;
  URL: string;
}

export enum GameType {
  FPS = 'FPS',
  MOBA = 'MOBA',
  STRATEGY = 'STRATEGY',
  SPORT = 'SPORT',
  CARD = 'CARD',
  ADVENTURE = 'ADVENTURE',
}

export enum Roles {
  JUGADOR = 'JUGADOR',
  ADMIN = 'ADMINISTRADOR',
  MODERADOR = 'MODERADOR',
}

export enum Mode {
  ONLINE = 'ONLINE',
  PRESENCIAL = 'PRESENCIAL',
}
