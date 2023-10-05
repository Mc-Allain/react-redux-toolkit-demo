import React from 'react'
import Section from '../shared/Section'

const Home = () => {
	return (
		<div className='flex flex-col gap-2 grow w-full p-4'>
			<div className='flex gap-2'>
				<Section title={'Vocabulary'} >
					Vocabulary List
				</Section>
				<Section title={'Particle'} >
					Particle List
				</Section>
				<Section title={'Demonstrative'} >
					Demonstrative List
				</Section>
			</div>
			<Section title={'Game Screen'} className={'grow'} >
				Game Screen
			</Section>
		</div>
	)
}

export default Home