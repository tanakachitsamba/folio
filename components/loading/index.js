import Loadable from 'react-loadable'

const Loading = () => <div>Loading</div>

export default (component = './component') =>
    Loadable({
        loader: () => import(component),
        loading: Loading,
    })
