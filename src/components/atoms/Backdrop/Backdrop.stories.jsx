import Backdrop from './Backdrop';

export default {
	title: 'Atoms/Backdrop',
	component: Backdrop
};

const Template = ({ ...args }) => (
	<div>
		<Backdrop {...args} />
		<div
			className={`${
				args.active ? 'opacity-100' : 'opacity-0 invisible'
			} w-96 absolute bg-gray-100 m-3 p-10 rounded-md z-50 transition-all duration-300`}
		>
			<h3>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis earum eaque dolor dicta. Eius, illo dolor! Consequuntur rerum vel
				praesentium saepe, ad debitis modi obcaecati in? Ex, nostrum deleniti. Adipisci?
			</h3>
		</div>
	</div>
);

export const Default = Template.bind();
Default.args = {
	active: true,
	onClick: () => alert('clicked')
};
