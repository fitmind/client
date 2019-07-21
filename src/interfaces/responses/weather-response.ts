interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface weatherResponse {
    readonly coord?: {
        lon: number;
        lat: number;
    };
    readonly weather?: weather[];
    readonly base?: string;
    readonly main?: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    readonly visibility?: number;
    readonly wind?: {
        speed: number;
        deg: number;
    };
    readonly clouds?: {
        all: number;
    };
    readonly dt?: number;
    readonly sys?: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    readonly timezone?: number;
    readonly id?: number;
    readonly name?: string;
    readonly cod?: number;
}
