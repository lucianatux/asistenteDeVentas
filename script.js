const precios = {
    pizarras: {
        mayor: {
            tiza:{
                pie:{
                    chica:{
                        sinbandeja:{
                            'tiza chica': 2481,
                        },
                        conbandeja:{
                            'tiza chica con bandeja': 2904,
                        }
                    },
                    grande:{
                        sinbandeja:{
                            'tiza grande': 4455,
                        },
                        conbandeja:{
                            'tiza grande con bandeja': 5005,
                        }
                    }      
                },
                colgante:{
                    'colgante tiza 1': 3047,
                    'colgante tiza 2': 6490,
                    'colgante tiza 3': 7590,
                },
            },
            fibron:{
                pie:{
                    chica:{
                        sinbandeja:{
                            'fibron chica': 2815,
                        },
                        conbandeja:{
                            'fibron chica con bandeja': 3255,
                        }
                    },
                    grande:{
                        sinbandeja:{
                            'fibron grande': 5037,
                        },
                        conbandeja:{
                            'fibron grande con bandeja': 5477,
                        }
                    }      
                },
                colgante:{
                    'colgante fibrón chica': 3466,
                    'colgante fibrón mediana': 7255,
                    'colgante fibrón grande': 8676,
                },  
            },
            otros:{
                'atril para pintar': 2481,
            'banco': 1595,
            'mesa chica': 7668,
            'mesa grande': 9941,
            },
            combos:{
                tiza:{
                    'tiza chica + banco': 4076,
                'tiza chica con bandeja + banco': 4499,
                }, 
                fibron:{
                    'fibrón chica + banco': 4410,
                'fibrón chica con bandeja + banco': 4850,
                'fibrón grande con bandeja + banco': 7072
                },
                atril:{
                    'atril + banco': 4076,
                }
            }
        },
        menor: {
            tiza:{
                pie:{
                    chica:{
                        sinbandeja:{
                            'tiza chica': 3722,
                        },
                        conbandeja:{
                            'tiza chica con bandeja': 4356,
                        }
                    },
                    grande:{
                        sinbandeja:{
                            'tiza grande': 6683,
                        },
                        conbandeja:{
                            'tiza grande con bandeja': 7508,
                        }
                    }      
                },
                colgante:{
                    'colgante tiza 1': 4571,
                    'colgante tiza 2': 9735,
                    'colgante tiza 3': 11385,
                },
            },
            fibron:{
                pie:{
                    chica:{
                        sinbandeja:{
                            'fibron chica': 4223,
                        },
                        conbandeja:{
                            'fibron chica con bandeja': 4883,
                        }
                    },
                    grande:{
                        sinbandeja:{
                            'fibron grande': 7556,
                        },
                        conbandeja:{
                            'fibron grande con bandeja': 8216,
                        }
                    }      
                },
                colgante:{
                    'colgante fibrón chica': 5199,
                    'colgante fibrón mediana': 10882,
                    'colgante fibrón grande': 13014,
                },  
            },
            otros:{
                'atril para pintar': 3722,
            'banco': 2393,
            'mesa chica': 11502,
            'mesa grande': 14912,
            },
            combos:{
                tiza:{
                    'tiza chica + banco': 6114,
                'tiza chica con bandeja + banco': 6748,
                }, 
                fibron:{
                    'fibrón chica + banco': 6615,
                'fibrón chica con bandeja + banco': 7275,
                'fibrón grande con bandeja + banco': 10608
                },
                atril:{
                    'atril + banco': 6114,
                }
            }
        }
    }
};


// Obtén las referencias a los elementos que necesitas
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');

// Agrega un evento de clic al botón de "pizarras"
document.querySelector('.one').addEventListener('click', () => {
    // Borra la pregunta actual y las opciones
    questionElement.innerHTML = '¿Precio por mayor o por menor?';
    optionsElement.innerHTML = `
        <button class="option one">Mayor</button>
        <button class="option two">Menor</button>
    `;

    // Agrega eventos de clic a los nuevos botones
    document.querySelector('.one').addEventListener('click', () => {
        questionElement.innerHTML = '¿Para tiza o para fibron?';
        optionsElement.innerHTML = `
            <button class="option one">Tiza</button>
            <button class="option two">Fibrón</button>
        `;
        // Continúa agregando eventos para las siguientes preguntas
    });

    document.querySelector('.two').addEventListener('click', () => {
        questionElement.innerHTML = 'Otras opciones para exhibidores...';
        optionsElement.innerHTML = `
            <!-- Agrega opciones para exhibidores y eventos -->
        `;
    });
});

// Agrega eventos similares para el botón de "exhibidores"

