import $ from 'jquery';
import { home, rooms, roomsDetail } from '../views';
import { treatments, treatmentsDetail} from '../views';
import { signUp } from '../sign-up/sign-up'

export const main = () => {
    const section = $('<section></section>');

    // NA START POKAZUJEMY WIDOK `home`
    section.append(home());

    document.addEventListener('navigation', event => {
        // const {detail} = event;
        const detail = event.detail;

        // new Map() 'home' --> home, ...
        // myMap.get(view) itd.
        switch (detail.view) {
            case 'home':
                section.empty().append(home());
                break;
            case 'signUp':
                section.empty().append(signUp());
                break;
            case 'rooms':
                section.empty().append(rooms());
                break;
            case 'rooms-detail':
                section.empty().append(roomsDetail(detail.roomId));
                break;
            case 'treatments':
                section.empty().append(treatments());
                break;
            case 'treatments-detail':
                section.empty().append(treatmentsDetail(detail.treatmentId));
                break;

            default:
                section.empty().append('Coś poszło nie tak :-(');
        }
    });

    return $(`<main></main>`).append(section);
};
