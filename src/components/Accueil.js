import React, { useEffect, useState } from 'react';
import styles from './Accueil.module.css';
import Date from '../../src/components/Date'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperatureAir, postConsigneAir, postObjectifPasAir } from '../Redux/Actions/gestionAir/temperatureAir.action';
import { getOjectifPasAir } from '../Redux/Actions/gestionAir/consigneObjectifPasAir.action';


const Accueil = () => {
    const dispatch = useDispatch();

    //! Appel à lancer au chagement de la page.

    useEffect(() => {
        dispatch(getTemperatureAir())
        dispatch(getOjectifPasAir())

    }, [dispatch])

    setInterval(() => {

        dispatch(getTemperatureAir())
        dispatch(getOjectifPasAir())

    }, 60000);

    //! -------------------------------------------------

    //! Recupération des datas dans les store.

    const state = useSelector((state) => state
    );
    //console.log('⭐ state ===> ', state);

    const dataTemperatureAir = useSelector((state) => state.temperatureAir
    );
    console.log('⭐ TemperatureAir ===> ', dataTemperatureAir);

    const consigneObjectifPasAir = useSelector((state) => state.consigneObjectifPasAir
    );
    console.log('⭐ Consigne Objectif Pas ===> ', consigneObjectifPasAir);


    //! -------------------------------------------------

    //! Gestion des inputs.

    const [consigneAir, setConsigneAir] = useState(' ');
    const [objectifAir, setObjectifAir] = useState(' ');
    const [pasAir, setPasAir] = useState(' ');

    // console.log('consigneAir : ', consigneAir);

    //! -------------------------------------------------

    //! Send data.

    function handleConsigne(e) {
        e.preventDefault();

        console.log('Clic handleConsigne objectifAir', consigneAir);

        dispatch(postConsigneAir({ data: consigneAir }))
        dispatch(getOjectifPasAir())

    }

    function handleDescente(e) {
        e.preventDefault();

        console.log('Clic handleDescente objectifAir', objectifAir);
        console.log('Clic handleDescente pasAir', pasAir);

        dispatch(postObjectifPasAir({ data: { pasAir, objectifAir } }))
        dispatch(getOjectifPasAir())
    }

    //! -------------------------------------------------

    return (
        <div className={styles.box}>
            <div className={styles.dateBox}><Date /></div>
            <div className={styles.infoBox}>
                {/* ----------- Température Air ----------- */}
                <div className={styles.cardInfosBox}>
                    <div className={styles.cardInfosData}>
                        <div className={styles.cardInfosTitle}>{'Température Air'}</div>
                        <div className={styles.cardInfosValeur}>{dataTemperatureAir.temperatureAir}{' °C'}</div>
                        <div className={styles.cardInfosConsigne}>{'Consigne : '}{consigneObjectifPasAir.getConsigne}{' °C'} </div>
                        <div className={styles.cardInfosDelta}>{'Delta : '}{dataTemperatureAir.deltaAir}{' °C'}</div>
                    </div>

                    <div className={styles.cardInfosInput}>
                        <form onSubmit={(e) => handleConsigne(e)}>
                            <div className={styles.cardInfosInputContainer}>
                                <div className={styles.cardInfosInputBox}>
                                    <div className={styles.cardInfosInputValueBoxTitle}>{'Consigne'}</div>

                                    <input className={styles.cardInfosInputValueInput} required type="number"
                                        onChange={(e) => setConsigneAir(e.target.value)} />
                                    <div className={styles.cardInfosInputValueHisto}>{consigneObjectifPasAir.getConsigne}{'°C'}</div>
                                </div>
                                <div className={styles.cardInfosInputBoxButton}>
                                    <input
                                        className={styles.cardInfosInputValueBoxButton}
                                        type="submit"
                                        value="Valider "
                                    />

                                </div>
                            </div>
                        </form>

                        <form onSubmit={(e) => handleDescente(e)}>
                            <div className={styles.cardInfosInputContainer2}>
                                <div className={styles.cardInfosInputBox}>
                                    <div className={styles.cardInfosInputValueBoxTitle}>{'Objectif'}</div>
                                    <input className={styles.cardInfosInputValueInput} required type="number"
                                        onChange={(e) => setObjectifAir(e.target.value)} />
                                    <div className={styles.cardInfosInputValueHisto}>{consigneObjectifPasAir.getObjectif

                                    }{'°C'}</div>
                                </div>
                                <div className={styles.cardInfosInputBox}>
                                    <div className={styles.cardInfosInputValueBoxTitle}>{'Pas'}</div>
                                    <input className={styles.cardInfosInputValueInput} required type="number"
                                        onChange={(e) => setPasAir(e.target.value)} />
                                    <div className={styles.cardInfosInputValueHisto}>{consigneObjectifPasAir.getPas
                                    }{'°C'}</div>
                                </div>
                                <div className={styles.cardInfosInputBoxButton}>
                                    <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                                </div>
                            </div>
                        </form>

                        <div className={styles.cardInfosDescenteContainer}>
                            <div className={styles.cardInfosDescenteTitle}>{'Gestion descente'}</div>
                            <div className={styles.cardInfosDescenteData}>{'1 Jour et 4 heures'}</div>
                        </div>
                    </div>
                </div>

                {/* ----------- Température Substrat ----------- */}

                <div className={styles.cardInfosBox}>
                    <div className={styles.cardInfosData}>
                        <div className={styles.cardInfosTitle}>{'Température Substrat'}</div>
                        <div className={styles.cardInfosValeur}>{ }{' °C'}</div>
                        <div className={styles.cardInfosConsigne}>{'Consigne : '}{ }{' °C'} </div>
                        <div className={styles.cardInfosDelta}>{'Delta : '}{ }{' °C'}</div>
                    </div>

                    <div className={styles.cardInfosInput}>
                        <div className={styles.cardInfosInputContainer}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Consigne'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosInputContainer2}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Objectif'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Pas'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosDescenteContainer}>
                            <div className={styles.cardInfosDescenteTitle}>{'Gestion descente'}</div>
                            <div className={styles.cardInfosDescenteData}>{ }</div>
                        </div>
                    </div>
                </div>

                {/* ----------- Taux Humidité ----------- */}
                <div className={styles.cardInfosBox}>
                    <div className={styles.cardInfosData}>
                        <div className={styles.cardInfosTitle}>{'Taux Humidité'}</div>
                        <div className={styles.cardInfosValeur}>{ }{' %'}</div>
                        <div className={styles.temperatureSecHum}>{'Température Sec : '}{ }{' °C'}</div>
                        <div className={styles.temperatureSecHum}>{'Température Hum : '}{ }{' °C'}</div>
                        <div className={styles.cardInfosConsigne}>{'Consigne : '}{ }{' °C'} </div>
                        <div className={styles.cardInfosDelta}>{'Delta : '}{ }{' °C'}</div>
                    </div>
                    <div className={styles.cardInfosInput}>
                        <div className={styles.cardInfosInputContainer}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Consigne'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosInputContainer2}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Objectif'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Pas'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosDescenteContainer}>
                            <div className={styles.cardInfosDescenteTitle}>{'Gestion descente'}</div>
                            <div className={styles.cardInfosDescenteData}>{ }</div>
                        </div>
                    </div>
                </div>


                {/* ----------- Taux Co2 ----------- */}
                <div className={styles.cardInfosBox}>
                    <div className={styles.cardInfosData}>
                        <div className={styles.cardInfosTitle}>{'Taux Co2'}</div>
                        <div className={styles.cardInfosValeur}>{ }{' PPM'}</div>
                        <div className={styles.cardInfosConsigne}>{'Consigne : '}{ }{' °C'} </div>
                        <div className={styles.cardInfosDelta}>{'Delta : '}{ }{' °C'}</div>
                    </div>
                    <div className={styles.cardInfosInput}>
                        <div className={styles.cardInfosInputContainer}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Consigne'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosInputContainer2}>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Objectif'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBox}>
                                <div className={styles.cardInfosInputValueBoxTitle}>{'Pas'}</div>
                                <input className={styles.cardInfosInputValueInput} />
                                <div className={styles.cardInfosInputValueHisto}>{ }{'°C'}</div>
                            </div>
                            <div className={styles.cardInfosInputBoxButton}>
                                <button className={styles.cardInfosInputValueBoxButton}>Valider</button>
                            </div>
                        </div>

                        <div className={styles.cardInfosDescenteContainer}>
                            <div className={styles.cardInfosDescenteTitle}>{'Gestion descente'}</div>
                            <div className={styles.cardInfosDescenteData}>{ }</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Accueil;