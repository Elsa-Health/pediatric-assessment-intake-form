import React from 'react'
import {
	render,
} from "@testing-library/react-native";
import { Header } from '../components';

describe('<Header/>',()=>{
    it('it can render the header',()=>{
        render(<Header/>)
    })
})