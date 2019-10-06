import CONFIG from '../config/config';

export const parseExpertiseText = (expertise: string) => {
    switch (expertise) {
        case CONFIG.expertises.yoga.value:
            return CONFIG.expertises.yoga.label;
        case CONFIG.expertises.personalTrainer.value:
            return CONFIG.expertises.personalTrainer.label;
        case CONFIG.expertises.nutritionist.value:
            return CONFIG.expertises.nutritionist.label;
        case CONFIG.expertises.lifeCoach.value:
            return CONFIG.expertises.lifeCoach.label;
        default:
            return '';
    }
};
