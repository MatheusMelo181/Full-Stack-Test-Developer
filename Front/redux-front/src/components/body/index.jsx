import { Title, ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets';

function Body() {

    return (
        <ThemeProvider>
            <Title>
                Title Text
            </Title>
        </ThemeProvider>
    )
}

export default Body;