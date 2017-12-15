import grasia_dash_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
from threading import Timer

app = dash.Dash('')

app.scripts.config.serve_locally = True


def generate_card():
    card_data = [
        {'label': 'Contributors', 'data': '2 000 000'},
        {'label': 'Editions', 'data': '90 000 000'},
        {'label': 'Pages', 'data': ' 200 000'}
        ]

    card_style = {'backgroundColor': '#004481',
                  'color': 'white',
                  'border': '1px lightgrey solid'}

    return grasia_dash_components.Card(
        id='test-card',
        img='https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
        data=card_data,
        style=card_style,
        url="https://www.wikipedia.org/",
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam mi, vehicula mollis libero at, congue tristique purus. Vivamus rhoncus tincidunt luctus.'
    );


app.layout = html.Div([

    html.H2('Loading dialog'),
    html.Button('Show Loading Dialog', id='button'),
    grasia_dash_components.LoadingDialog(id="dialog", text="test", show=False),

    html.Hr(),

    html.H2('Card with image'),
    generate_card(),

    html.Hr(),

    html.H2('Simple Accordion'),
    grasia_dash_components.Accordion(
        id="test-tree-view",
        label="See Options",
        children=[
            html.P('Option 1'),
            html.P('Option 2'),
            html.P('Option 3')
        ]
    ),

    html.Hr(),

    html.H2('Accordion with a Checklist inside'),
    grasia_dash_components.Accordion(
        id="test-tree-view-2",
        label="Checklist",
        children=[
            dcc.Checklist(
                id='checklist',
                options=[
                    {'label': 'New York City', 'value': 'NYC'},
                    {'label': 'Montréal', 'value': 'MTL'},
                    {'label': 'San Francisco', 'value': 'SF'}
                ],
                values=['MTL', 'SF']
            )
        ]
    ),

    html.Hr(),

    html.H2('Accordion with Cards inside'),
    grasia_dash_components.Accordion(
        id="test-tree-view-3",
        label="Cards",
        children=[
            generate_card(),
            generate_card(),
            generate_card(),
        ],
        defaultCollapsed=True
    ),

    html.Hr(),

    html.Div(
        grasia_dash_components.Tabs(
            tabs=[{'label': '123456789 More-text', 'value': 1},
            {'label': '1234567890A More-text', 'value': 2}],
            value=1,
            id='tabs',
            style={'font-weight':'bold'}
        )
    )
])

def hide_loading_dialog(show):
    print('foo')


@app.callback(Output('dialog', 'show'),
    events=[Event('interval-component-update-layout', 'interval')]
    [Input('button', 'n_clicks')])
def show_loading_dialog(n_clicks):
    print(n_clicks);
    if n_clicks != None:
        t = Timer(2.0, show_loading_dialog, args=[2])
        t.start()
        return True
    if n_clicks == 2:
        return False

if __name__ == '__main__':
    print('Using version ' + dcc.__version__ + ' of Dash Core Components.')
    print('Using version ' + grasia_dash_components.__version__ + ' of Grasia Dash Components.')

    app.run_server(debug=True)
