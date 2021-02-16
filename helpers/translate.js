const translatePerson=(data)=>{
    return {
        nombre:data.name,
        altura:data.height,
        peso:data.mass,
        color_cabello:data.hair_color,
        color_piel:data.skin_color,
        color_ojo:data.eye_color,
        cumpleanos:data.birth_year,
        genero:data.gender,
        mundo_natal:data.homeworld,
        peliculas:data.films,
        especies:data.species,
        vehiculos:data.vehicles,
        naves_estelares:data.starships,
        creado:data.created,
        editado:data.edited,
        enlace:data.url
    }
}
const translateFilm=(data)=>{
    return {
        titulo: data.title,
        episodio_id: data.episode_id,
        rastreo_apertura: data.opening_crawl,
        director: data.director,
        productor: data.producer,
        fecha_lanzamiento: data.release_date,
        personajes: data.characters,
        planetas: data.planets,
        naves_estelares: data.starships,
        vehiculos: data.vehicles,
        especies: data.species,
        creado: data.created,
        editado: data.edited,
        enlace: data.url
    }
}

const tranlateStarship=(data)=>{
    return {
        nombre: data.name,
        modelo: data.model,
        fabricante: data.manufacturer,
        costo_en_creditos: data.cost_in_credits,
        longitud: data.length,
        velocidad_maxima_atmosfera: data.max_atmosphering_speed,
        tripulacion: data.crew,
        pasajeros: data.passengers,
        capacidad_cargo: data.cargo_capacity,
        consumibles: data.consumables,
        calificacion_hiperimpulsor: data.hyperdrive_rating,
        MGLT: data.MGLT,
        clase_nave_estelar: data.starship_class,
        pilotos: data.pilots,
        peliculas:data.films,
        creado:data.created,
        editado:data.edited,
        enlace:data.url
    }
}

module.exports={
    translatePerson,
    translateFilm,
    tranlateStarship
}