import { useEffect, useState } from 'react';
import { PopupLayout } from 'react-modal-global';
import BasicList from '../components/BasicList';

const PreviewMovieCrew = (props) => {
    const { id, row: { setActors, setDirectors, actors, directors }, service } = props;
    const [isLoading, setIsLoading] = useState(false);
    const fetchCrew = async (id) => {
        try {
            setIsLoading(true);
            const response = await service.getCredits(id);
            setActors(response.cast);
            setDirectors(response.crew);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (actors == null && directors == null) fetchCrew(id);
    }, [])

    return (
        <PopupLayout>
            <h1>Movie crew</h1>
            {isLoading ?
                <span>Loading...</span>
                :
                <>
                    {actors != null ?
                        <>
                            <h3>Actors</h3>
                            <BasicList items={actors} />
                        </>
                        :
                        null
                    }
                    {directors != null ?
                        <>
                            <h3>Directors</h3>
                            <BasicList items={directors} />
                        </>
                        :
                        null
                    }
                </>
            }
        </PopupLayout>
    );
}

export default PreviewMovieCrew;
