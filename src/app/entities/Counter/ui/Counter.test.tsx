import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import {Counter} from "./Counter"

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Counter />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Counter />,{initialState:{
            counter:{
                value:10
            }
        }});
        const value = screen.getByTestId('value-id');
        const incrementBtn = screen.getByTestId('increment-id');
        const decrementBtn = screen.getByTestId('decrement-id');
        expect(value).toHaveTextContent("10")
     
    });

        test('decrement', () => {
        componentRender(<Counter />,{initialState:{
            counter:{
                value:10
            }
        }});
        const value = screen.getByTestId('value-id');
        const decrementBtn = screen.getByTestId('decrement-id');
        userEvent.click(decrementBtn)
        expect(value).toHaveTextContent("9")
     
    });
});