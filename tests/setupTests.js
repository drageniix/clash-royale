import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import clan from './resources/clan.json'

Enzyme.configure({
    adapter: new Adapter()
})

global.shallow = shallow
global.clan = clan