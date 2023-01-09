import { petComment } from 'components/Authorization/Input/inputOptions';
import { ValidationError } from 'components/Authorization/ValidationError/ValidationError';
import { ReactComponent as UploadCross } from 'shared/images/user/uploadCross.svg';
import { AddPetInput } from '../AddPetInput/AddPetInput';

import style from './AddPetFormSecondPage.module.scss';

export const AddPetFormSecondPage = ({ register, watch, errors, uploadError }) => {
	const newImage = watch('petUpload');
	return (
		<>
			<div className={style.uploadThumb}>
				<label htmlFor="petUpload" className={style.petUploadLabel}>
					<p className={style.petUploadLabel__text}>
						Add photo and some comments
					</p>
					<div className={style.crossWrapper}>
						{newImage ? (
							<img
								className={style.image}
								src={URL.createObjectURL(newImage[0])}
								alt="poster"
							/>
						) : (
							<UploadCross width={48} height={48} stroke="rgba(17, 17, 17, 0.6)" />
						)}
					</div>
					<input
						type="file"
						{...register('petUpload')}
						id="petUpload"
						placeholder="Type name pet"
						className={style.uploadInput}
					/>
					{(uploadError && !newImage[0]) && <ValidationError>Add an image</ValidationError>}
				</label>
			</div>
			<AddPetInput register={register} textarea errors={errors} settings={petComment } />

		</>
	);
};
