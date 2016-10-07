import React from 'react';

import Dropdown from '../modules/Dropdown';
import LinkItem from '../collections/LinkItem';
import DropdownItem from '../collections/DropdownItem';
import Item from '../collections/Item';
import Menu from '../collections/Menu';

import Header from '../components/Header';
import Divider from '../components/Divider';

export default class DropdownView extends React.Component {
	render() {
		return (
			<div>
				<Header size={2} text="Dropdown" />

				<Header size={3} text="Dropdown" />
				<Dropdown text="File">
					<Item text="New" />
					<Item text="Open..." description="ctrl + o" />
					<Item text="Save as..." description="ctrl + s" />
					<Item text="Rename" description="ctrl + r" />
					<Item text="Make a copy" />
					<Item text="Move to folder" icon="folder" />
					<Item text="Move to trash" icon="trash" />
					<Divider />
					<Item text="Download As..." />
					<DropdownItem text="Publish To Web">
						<Item text="Google Docs" />
						<Item text="Google Drive" />
						<Item text="Dropbox" />
						<Item text="Adove Creative Cloud" />
						<Item text="Private FTP" />
						<Item text="Another Service..." />
					</DropdownItem>
					<Item text="E-mail Collaborators" />
				</Dropdown>

				<Header size={3} text="Selection" />
				<Dropdown type="selection" name="gender" text="Gender">
					<Item text="Male" value="1"/>
					<Item text="Female" value="0"/>
				</Dropdown>

				<Header size={3} text="Image Selection" />
				<Dropdown type="selection" name="user" text="Select Friend">
					<Item text="Jenny Hess" value="jenny" imgSrc="/assets/avatar/jenny.jpg" />
					<Item text="Elliot Fu" value="elliot" imgSrc="/assets/avatar/elliot.jpg" />
					<Item text="Stevie Feliciano" value="stevie" imgSrc="/assets/avatar/stevie.jpg" />
					<Item text="Matt" value="matt" imgSrc="/assets/avatar/matthew.png" />
					<Item text="Kristy" value="kristy" imgSrc="/assets/avatar/kristy.png" />
				</Dropdown>

				<Header size={3} text="Search Selection" />
				<Dropdown type="selection" name="country" text="Select Country" search={true}>
					<Item text="Afghanistan" value="af" icon="af flag" />
					<Item text="Aland Islands" value="ax" icon="ax flag" />
					<Item text="Albania" value="al" icon="al flag" />
					<Item text="Algeria" value="dz" icon="dz flag" />
					<Item value="as" icon="as flag" text="American Samoa" />
					<Item value="ad" icon="ad flag" text="Andorra" />
					<Item value="ao" icon="ao flag" text="Angola" />
					<Item value="ai" icon="ai flag" text="Anguilla" />
					<Item value="ag" icon="ag flag" text="Antigua" />
					<Item value="ar" icon="ar flag" text="Argentina" />
					<Item value="am" icon="am flag" text="Armenia" />
					<Item value="aw" icon="aw flag" text="Aruba" />
					<Item value="au" icon="au flag" text="Australia" />
					<Item value="at" icon="at flag" text="Austria" />
					<Item value="az" icon="az flag" text="Azerbaijan" />
					<Item value="bs" icon="bs flag" text="Bahamas" />
					<Item value="bh" icon="bh flag" text="Bahrain" />
					<Item value="bd" icon="bd flag" text="Bangladesh" />
					<Item value="bb" icon="bb flag" text="Barbados" />
					<Item value="by" icon="by flag" text="Belarus" />
					<Item value="be" icon="be flag" text="Belgium" />
					<Item value="bz" icon="bz flag" text="Belize" />
					<Item value="bj" icon="bj flag" text="Benin" />
					<Item value="bm" icon="bm flag" text="Bermuda" />
					<Item value="bt" icon="bt flag" text="Bhutan" />
					<Item value="bo" icon="bo flag" text="Bolivia" />
					<Item value="ba" icon="ba flag" text="Bosnia" />
					<Item value="bw" icon="bw flag" text="Botswana" />
					<Item value="bv" icon="bv flag" text="Bouvet Island" />
					<Item value="br" icon="br flag" text="Brazil" />
					<Item value="vg" icon="vg flag" text="British Virgin Islands" />
					<Item value="bn" icon="bn flag" text="Brunei" />
					<Item value="bg" icon="bg flag" text="Bulgaria" />
					<Item value="bf" icon="bf flag" text="Burkina Faso" />
					<Item value="ar" icon="ar flag" text="Burma" />
					<Item value="bi" icon="bi flag" text="Burundi" />
					<Item value="tc" icon="tc flag" text="Caicos Islands" />
					<Item value="kh" icon="kh flag" text="Cambodia" />
					<Item value="cm" icon="cm flag" text="Cameroon" />
					<Item value="ca" icon="ca flag" text="Canada" />
					<Item value="cv" icon="cv flag" text="Cape Verde" />
					<Item value="ky" icon="ky flag" text="Cayman Islands" />
					<Item value="cf" icon="cf flag" text="Central African Republic" />
					<Item value="td" icon="td flag" text="Chad" />
					<Item value="cl" icon="cl flag" text="Chile" />
					<Item value="cn" icon="cn flag" text="China" />
					<Item value="cx" icon="cx flag" text="Christmas Island" />
					<Item value="cc" icon="cc flag" text="Cocos Islands" />
					<Item value="co" icon="co flag" text="Colombia" />
					<Item value="km" icon="km flag" text="Comoros" />
					<Item value="cg" icon="cg flag" text="Congo Brazzaville" />
					<Item value="cd" icon="cd flag" text="Congo" />
					<Item value="ck" icon="ck flag" text="Cook Islands" />
					<Item value="cr" icon="cr flag" text="Costa Rica" />
					<Item value="ci" icon="ci flag" text="Cote Divoire" />
					<Item value="hr" icon="hr flag" text="Croatia" />
					<Item value="cu" icon="cu flag" text="Cuba" />
					<Item value="cy" icon="cy flag" text="Cyprus" />
					<Item value="cz" icon="cz flag" text="Czech Republic" />
					<Item value="dk" icon="dk flag" text="Denmark" />
					<Item value="dj" icon="dj flag" text="Djibouti" />
					<Item value="dm" icon="dm flag" text="Dominica" />
					<Item value="do" icon="do flag" text="Dominican Republic" />
					<Item value="ec" icon="ec flag" text="Ecuador" />
					<Item value="eg" icon="eg flag" text="Egypt" />
					<Item value="sv" icon="sv flag" text="El Salvador" />
					<Item value="gb" icon="gb flag" text="England" />
					<Item value="gq" icon="gq flag" text="Equatorial Guinea" />
					<Item value="er" icon="er flag" text="Eritrea" />
					<Item value="ee" icon="ee flag" text="Estonia" />
					<Item value="et" icon="et flag" text="Ethiopia" />
					<Item value="eu" icon="eu flag" text="European Union" />
					<Item value="fk" icon="fk flag" text="Falkland Islands" />
					<Item value="fo" icon="fo flag" text="Faroe Islands" />
					<Item value="fj" icon="fj flag" text="Fiji" />
					<Item value="fi" icon="fi flag" text="Finland" />
					<Item value="fr" icon="fr flag" text="France" />
					<Item value="gf" icon="gf flag" text="French Guiana" />
					<Item value="pf" icon="pf flag" text="French Polynesia" />
					<Item value="tf" icon="tf flag" text="French Territories" />
					<Item value="ga" icon="ga flag" text="Gabon" />
					<Item value="gm" icon="gm flag" text="Gambia" />
					<Item value="ge" icon="ge flag" text="Georgia" />
					<Item value="de" icon="de flag" text="Germany" />
					<Item value="gh" icon="gh flag" text="Ghana" />
					<Item value="gi" icon="gi flag" text="Gibraltar" />
					<Item value="gr" icon="gr flag" text="Greece" />
					<Item value="gl" icon="gl flag" text="Greenland" />
					<Item value="gd" icon="gd flag" text="Grenada" />
					<Item value="gp" icon="gp flag" text="Guadeloupe" />
					<Item value="gu" icon="gu flag" text="Guam" />
					<Item value="gt" icon="gt flag" text="Guatemala" />
					<Item value="gw" icon="gw flag" text="Guinea-Bissau" />
					<Item value="gn" icon="gn flag" text="Guinea" />
					<Item value="gy" icon="gy flag" text="Guyana" />
					<Item value="ht" icon="ht flag" text="Haiti" />
					<Item value="hm" icon="hm flag" text="Heard Island" />
					<Item value="hn" icon="hn flag" text="Honduras" />
					<Item value="hk" icon="hk flag" text="Hong Kong" />
					<Item value="hu" icon="hu flag" text="Hungary" />
					<Item value="is" icon="is flag" text="Iceland" />
					<Item value="in" icon="in flag" text="India" />
					<Item value="io" icon="io flag" text="Indian Ocean Territory" />
					<Item value="id" icon="id flag" text="Indonesia" />
					<Item value="ir" icon="ir flag" text="Iran" />
					<Item value="iq" icon="iq flag" text="Iraq" />
					<Item value="ie" icon="ie flag" text="Ireland" />
					<Item value="il" icon="il flag" text="Israel" />
					<Item value="it" icon="it flag" text="Italy" />
					<Item value="jm" icon="jm flag" text="Jamaica" />
					<Item value="jp" icon="jp flag" text="Japan" />
					<Item value="jo" icon="jo flag" text="Jordan" />
					<Item value="kz" icon="kz flag" text="Kazakhstan" />
					<Item value="ke" icon="ke flag" text="Kenya" />
					<Item value="ki" icon="ki flag" text="Kiribati" />
					<Item value="kw" icon="kw flag" text="Kuwait" />
					<Item value="kg" icon="kg flag" text="Kyrgyzstan" />
					<Item value="la" icon="la flag" text="Laos" />
					<Item value="lv" icon="lv flag" text="Latvia" />
					<Item value="lb" icon="lb flag" text="Lebanon" />
					<Item value="ls" icon="ls flag" text="Lesotho" />
					<Item value="lr" icon="lr flag" text="Liberia" />
					<Item value="ly" icon="ly flag" text="Libya" />
					<Item value="li" icon="li flag" text="Liechtenstein" />
					<Item value="lt" icon="lt flag" text="Lithuania" />
					<Item value="lu" icon="lu flag" text="Luxembourg" />
					<Item value="mo" icon="mo flag" text="Macau" />
					<Item value="mk" icon="mk flag" text="Macedonia" />
					<Item value="mg" icon="mg flag" text="Madagascar" />
					<Item value="mw" icon="mw flag" text="Malawi" />
					<Item value="my" icon="my flag" text="Malaysia" />
					<Item value="mv" icon="mv flag" text="Maldives" />
					<Item value="ml" icon="ml flag" text="Mali" />
					<Item value="mt" icon="mt flag" text="Malta" />
					<Item value="mh" icon="mh flag" text="Marshall Islands" />
					<Item value="mq" icon="mq flag" text="Martinique" />
					<Item value="mr" icon="mr flag" text="Mauritania" />
					<Item value="mu" icon="mu flag" text="Mauritius" />
					<Item value="yt" icon="yt flag" text="Mayotte" />
					<Item value="mx" icon="mx flag" text="Mexico" />
					<Item value="fm" icon="fm flag" text="Micronesia" />
					<Item value="md" icon="md flag" text="Moldova" />
					<Item value="mc" icon="mc flag" text="Monaco" />
					<Item value="mn" icon="mn flag" text="Mongolia" />
					<Item value="me" icon="me flag" text="Montenegro" />
					<Item value="ms" icon="ms flag" text="Montserrat" />
					<Item value="ma" icon="ma flag" text="Morocco" />
					<Item value="mz" icon="mz flag" text="Mozambique" />
					<Item value="na" icon="na flag" text="Namibia" />
					<Item value="nr" icon="nr flag" text="Nauru" />
					<Item value="np" icon="np flag" text="Nepal" />
					<Item value="an" icon="an flag" text="Netherlands Antilles" />
					<Item value="nl" icon="nl flag" text="Netherlands" />
					<Item value="nc" icon="nc flag" text="New Caledonia" />
					<Item value="pg" icon="pg flag" text="New Guinea" />
					<Item value="nz" icon="nz flag" text="New Zealand" />
					<Item value="ni" icon="ni flag" text="Nicaragua" />
					<Item value="ne" icon="ne flag" text="Niger" />
					<Item value="ng" icon="ng flag" text="Nigeria" />
					<Item value="nu" icon="nu flag" text="Niue" />
					<Item value="nf" icon="nf flag" text="Norfolk Island" />
					<Item value="kp" icon="kp flag" text="North Korea" />
					<Item value="mp" icon="mp flag" text="Northern Mariana Islands" />
					<Item value="no" icon="no flag" text="Norway" />
					<Item value="om" icon="om flag" text="Oman" />
					<Item value="pk" icon="pk flag" text="Pakistan" />
					<Item value="pw" icon="pw flag" text="Palau" />
					<Item value="ps" icon="ps flag" text="Palestine" />
					<Item value="pa" icon="pa flag" text="Panama" />
					<Item value="py" icon="py flag" text="Paraguay" />
					<Item value="pe" icon="pe flag" text="Peru" />
					<Item value="ph" icon="ph flag" text="Philippines" />
					<Item value="pn" icon="pn flag" text="Pitcairn Islands" />
					<Item value="pl" icon="pl flag" text="Poland" />
					<Item value="pt" icon="pt flag" text="Portugal" />
					<Item value="pr" icon="pr flag" text="Puerto Rico" />
					<Item value="qa" icon="qa flag" text="Qatar" />
					<Item value="re" icon="re flag" text="Reunion" />
					<Item value="ro" icon="ro flag" text="Romania" />
					<Item value="ru" icon="ru flag" text="Russia" />
					<Item value="rw" icon="rw flag" text="Rwanda" />
					<Item value="sh" icon="sh flag" text="Saint Helena" />
					<Item value="kn" icon="kn flag" text="Saint Kitts and Nevis" />
					<Item value="lc" icon="lc flag" text="Saint Lucia" />
					<Item value="pm" icon="pm flag" text="Saint Pierre" />
					<Item value="vc" icon="vc flag" text="Saint Vincent" />
					<Item value="ws" icon="ws flag" text="Samoa" />
					<Item value="sm" icon="sm flag" text="San Marino" />
					<Item value="gs" icon="gs flag" text="Sandwich Islands" />
					<Item value="st" icon="st flag" text="Sao Tome" />
					<Item value="sa" icon="sa flag" text="Saudi Arabia" />
					<Item value="sn" icon="sn flag" text="Senegal" />
					<Item value="cs" icon="cs flag" text="Serbia" />
					<Item value="rs" icon="rs flag" text="Serbia" />
					<Item value="sc" icon="sc flag" text="Seychelles" />
					<Item value="sl" icon="sl flag" text="Sierra Leone" />
					<Item value="sg" icon="sg flag" text="Singapore" />
					<Item value="sk" icon="sk flag" text="Slovakia" />
					<Item value="si" icon="si flag" text="Slovenia" />
					<Item value="sb" icon="sb flag" text="Solomon Islands" />
					<Item value="so" icon="so flag" text="Somalia" />
					<Item value="za" icon="za flag" text="South Africa" />
					<Item value="kr" icon="kr flag" text="South Korea" />
					<Item value="es" icon="es flag" text="Spain" />
					<Item value="lk" icon="lk flag" text="Sri Lanka" />
					<Item value="sd" icon="sd flag" text="Sudan" />
					<Item value="sr" icon="sr flag" text="Suriname" />
					<Item value="sj" icon="sj flag" text="Svalbard" />
					<Item value="sz" icon="sz flag" text="Swaziland" />
					<Item value="se" icon="se flag" text="Sweden" />
					<Item value="ch" icon="ch flag" text="Switzerland" />
					<Item value="sy" icon="sy flag" text="Syria" />
					<Item value="tw" icon="tw flag" text="Taiwan" />
					<Item value="tj" icon="tj flag" text="Tajikistan" />
					<Item value="tz" icon="tz flag" text="Tanzania" />
					<Item value="th" icon="th flag" text="Thailand" />
					<Item value="tl" icon="tl flag" text="Timorleste" />
					<Item value="tg" icon="tg flag" text="Togo" />
					<Item value="tk" icon="tk flag" text="Tokelau" />
					<Item value="to" icon="to flag" text="Tonga" />
					<Item value="tt" icon="tt flag" text="Trinidad" />
					<Item value="tn" icon="tn flag" text="Tunisia" />
					<Item value="tr" icon="tr flag" text="Turkey" />
					<Item value="tm" icon="tm flag" text="Turkmenistan" />
					<Item value="tv" icon="tv flag" text="Tuvalu" />
					<Item value="ug" icon="ug flag" text="Uganda" />
					<Item value="ua" icon="ua flag" text="Ukraine" />
					<Item value="ae" icon="ae flag" text="United Arab Emirates" />
					<Item value="us" icon="us flag" text="United States" />
					<Item value="uy" icon="uy flag" text="Uruguay" />
					<Item value="um" icon="um flag" text="Us Minor Islands" />
					<Item value="vi" icon="vi flag" text="Us Virgin Islands" />
					<Item value="uz" icon="uz flag" text="Uzbekistan" />
					<Item value="vu" icon="vu flag" text="Vanuatu" />
					<Item value="va" icon="va flag" text="Vatican City" />
					<Item value="ve" icon="ve flag" text="Venezuela" />
					<Item value="vn" icon="vn flag" text="Vietnam" />
					<Item value="wf" icon="wf flag" text="Wallis and Futuna" />
					<Item value="eh" icon="eh flag" text="Western Sahara" />
					<Item value="ye" icon="ye flag" text="Yemen" />
					<Item value="zm" icon="zm flag" text="Zambia" />
					<Item value="zw" icon="zw flag" text="Zimbabwe" />
				</Dropdown>

				<Header size={3} text="Multiple Selection" />
				<Dropdown type="selection" name="country" text="Skills" multiple={true}>
					<Item text="Angular" value="angular" />
					<Item text="CSS" value="css" />
					<Item text="Graphic Design" value="design" />
					<Item text="Ember" value="ember" />
					<Item text="HTML" value="html" />
					<Item text="Information Architecture" value="ia" />
					<Item text="Javascript" value="javascript" />
					<Item text="Mechanical Engineering" value="mech" />
					<Item text="Meteor" value="meteor" />
					<Item text="NodeJS" value="node" />
					<Item text="Plumbing" value="plumbing" />
					<Item text="Python" value="python" />
					<Item text="Rails" value="rails" />
					<Item text="React" value="react" />
					<Item text="Kitchen Repair" value="repair" />
					<Item text="Ruby" value="ruby" />
					<Item text="UI Design" value="ui" />
					<Item text="User Experience" value="ux" />
				</Dropdown>

				<Header size={3} text="Multiple Search Selection" />
				<Dropdown type="selection" name="country" text="Skills" search={true} multiple={true}>
					<Item text="Angular" value="angular" />
					<Item text="CSS" value="css" />
					<Item text="Graphic Design" value="design" />
					<Item text="Ember" value="ember" />
					<Item text="HTML" value="html" />
					<Item text="Information Architecture" value="ia" />
					<Item text="Javascript" value="javascript" />
					<Item text="Mechanical Engineering" value="mech" />
					<Item text="Meteor" value="meteor" />
					<Item text="NodeJS" value="node" />
					<Item text="Plumbing" value="plumbing" />
					<Item text="Python" value="python" />
					<Item text="Rails" value="rails" />
					<Item text="React" value="react" />
					<Item text="Kitchen Repair" value="repair" />
					<Item text="Ruby" value="ruby" />
					<Item text="UI Design" value="ui" />
					<Item text="User Experience" value="ux" />
				</Dropdown>

				<Divider />
			</div>
		);
	}
}
