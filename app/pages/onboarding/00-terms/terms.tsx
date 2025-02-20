/* eslint-disable no-useless-escape */

/* eslint-disable no-irregular-whitespace */
import { OnboardingSelector } from '../../../tests/features/onboarding.selectors';
import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
} from '@components/onboarding';
import routes from '@constants/routes.json';
import { useBackButton } from '@hooks/use-back-url';
import { Flex, Text } from '@stacks/ui';
import { openExternalLink } from '@utils/external-links';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

const terms = `
##### LAST REVISED ON: August 31, 2023

Hello, and welcome to Leather’s Terms of Use (these “Terms”). These Terms are important because they describe your rights and obligations when using the Services and Products (defined below) offered by us or our affiliates. 

Please note that these Terms contain **Indemnification**, **Governing Law and Venue, Dispute Resolution**, **Assumption of Risk** and **Disclaimer of Warranties and Limitation of Liability** sections that affect your rights, including your ability to bring legal claims against us. Please read these Terms, our Privacy Policy (the “Privacy Policy”) and any other terms referenced in this document carefully.  If you do not agree to be bound by these Terms of Use, you are not permitted to use our Services.

1. ## **Introduction**

Leather is operated by Leather Wallet LLC, (referred to herein as “**Leather**”), a subsidiary of Nassau Machines Inc. (“Trust Machines”, or collectively with Leather Wallet, “**we”**, “**our”**, or “**us”**). By accessing or using https\://leather.io and any other website, browser extensions, mobile applications, desktop applications, web applications, or as otherwise accessing or utilizing any of the services we provide as further set forth herein and/or any other agreement(s) into which we and you enter (collectively, the “Services” or “Products”), you agree that you have read, understand, and accept all of the terms and conditions contained in these Terms, including Section 9 ("Dispute Resolution"), as well as the [Privacy Policy](https://leather.io/privacy-policy).

Leather is a Bitcoin wallet for tapping into the emerging Bitcoin economy. It allows you to manage various assets secured by the Bitcoin blockchain, such as BTC, Ordinals, Stamps, BRC-20 tokens, STX, Stacks NFTs. It also allows you to connect to hundreds of apps for interacting and exchanging assets with others across a growing ecosystem of Bitcoin-based communities.

2. ## **Using Our Services**

**Eligibility**. To be eligible to use the Services you must be of the legal age in the jurisdiction you are resident in at the time of using the Services. If you are below the legal age in your jurisdiction, you are prohibited from using the Services.

**Updates to Terms of Use**. Your use of the Services is subject to your agreement to these Terms, which may be updated by us at any time with or without notice to you. The Effective Date of the most up to date Terms will be provided at the top of each version of these Terms, respectively. Any such updates will be effective upon our publishing such updated Terms. If you do not agree with these Terms, you may not use the Services.

**Updates to the Services.** We may update and change our Services from time to time, for example, to reflect changes to our products, our users' needs and our business priorities. We will try to give you reasonable notice of any major changes.

**User Accounts**. In order to use certain portions of our Services, you will need to create an account with us (“User Account”). In order to create a User Account, you must generate or import a cryptographic mnemonic phrase (i.e. Secret Key or seed phrase) and secure it with a client-side password. By creating a User Account, you agree: (a) to maintain the security of your password or Secret Key and accept all risks of unauthorized access involving your credentials and the information you provide to us; (b) to immediately notify us if you discover or otherwise suspect any security breaches related to the Services, or your credentials used on the Services; (c) that you will use our Services only for yourself, and not on behalf of any third party, unless authorized by such third party; and (d) that you are fully responsible for all activity on the Services that occurs under your User Account.

We may, in our sole discretion, refuse to allow you to create a User Account, or limit the number of User Accounts that you may associate with the Services, or suspend or terminate any User Account or access to the Services. You also agree that you will not:

- Create multiple User Accounts, unless authorized by us;
- Use the Services under a different User Account if we’ve disabled access for you under a different User Account, unless you have our written permission first;
- Buy, sell, rent, or lease access to the Services under your login credentials or User Account to any third party, unless you have our written permission first;

**Account Communication**. By creating a User Account, you agree to receive service related electronic communications from us. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. 

3. ## **Representations and Warranties**

You hereby represent and warrant that your use of the Services and/or any of the Platform complies with any and all applicable laws and does not infringe upon any third-party rights, including but not limited to any intellectual property rights, privacy rights and publicity rights, and that your use will not violate these Terms or any such laws and/or rights.

4. ## Assumption of Risk

By accessing and using the Services, you represent that you understand the risks inherent to and associated with blockchain networks and cryptographic systems and warrant that you have the technical sophistication and working knowledge required to use, engage, or interact with blockchain networks, cryptographic systems, smart contracts, and digital assets, such as Bitcoin (BTC), and Stacks (STX) (collectively, “Blockchain Technologies”).

By accessing and using the Services in any manner, you (i) acknowledge that you have reviewed publicly-available materials sufficient to ensure that you understand how the Platform and any associated blockchain network(s) function; and (ii) assume all risks associated with such use and the use of any Blockchain Technologies, including, but not limited to, the risk of hardware, software and internet connections failure or problems, the risk of malicious software introduction, the risk that third parties may obtain unauthorized access to information stored within your Wallet, and/or the risk of total loss of any digital assets employed to interact with the Platform (e.g., arising out of or in connection with exploits of and/or defects in any underlying or associated software code, etc.). You accept and acknowledge that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using any Blockchain Technologies for processing transactions, however caused.

Additionally, you understand that the markets for digital assets are nascent and highly volatile due to risk factors including (but not limited to) adoption, speculation, technology, security, and regulation. You acknowledge that we are not responsible for any of these variables or risks, do not own or control any blockchain, and cannot be held liable for any resulting losses that you experience as a result of your use of Blockchain Technologies. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using Blockchain Technologies as part of your use of the Services.

******4.1 Non-Custodial and No Fiduciary Duties**

The Leather is purely a non-custodial application, meaning we do not ever have custody, possession, or control of your digital assets or the digital assets displayed at any time. It further means you are solely responsible for the custody of the cryptographic private keys to the digital asset wallets you hold and you should never share your wallet credentials or seed phrase with anyone. We accept no responsibility for, or liability to you, in connection with your use of a wallet and make no representations or warranties regarding how any of our Products will operate with any specific wallet. Likewise, you are solely responsible for any associated wallet and we are not liable for any acts or omissions by you in connection with or as a result of your wallet  being compromised.  For the avoidance of doubt, any references herein to a "wallet" shall include Leather.\
‍\
This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.

5. ## Termination of Access to Services 

**Suspension, Termination, and Cancellation**. We may, at our option and in our sole discretion: (a) suspend, restrict, or terminate your access to any or all of the Services, and/or (b) deactivate or cancel your User Account, if: (i) we are so required by a facially valid subpoena, court order or binding order of any government authority; (ii) we reasonably suspect you of using the Services in connection with any Prohibited Uses (as defined below); (iii) your use of the Services is subject to any pending litigation, investigation, or government proceeding and/or we, in our sole discretion, perceive a heightened risk of legal or regulatory non-compliance associated with your activity; (iv) any of our service partners are unable to support your use thereof; (v) you take any action that Leather or Trust Machines deems in its sole discretion as circumventing our controls, or abusing promotions which Leather or Trust Machines may offer from time to time; or (vi) you breach these Terms. 

If we suspend or close your User Account or terminate your use of the Services for any reason, we will provide you with notice of our actions, unless a court order or other legal process prevents or prohibits us from providing you with such notice. You acknowledge that our decision to take certain actions, including limiting access to or suspending your User Account, may be based on confidential criteria that are essential to our risk management and/or security protocols. You agree that we are under no obligation to disclose the details of its risk management and/or security procedures to you.

6. ## User Conduct

**Prohibited Uses.** You may not use the Services to engage in the following categories of activity ("Prohibited Uses"). The Prohibited Uses listed below are representative, but not exhaustive, and we reserve the right to update or amend such list in our sole discretion at any time, with or without notice to you. If you are uncertain as to whether or not your use of the Services involves a Prohibited Use or have questions about how these requirements apply to you, please contact us at contact\@leather.io. By using our Services, you agree that you will not use the Services to do or undertake any of the following, as determined by Leather or Trust Machines in our sole discretion:

- **Abusive Activity:** Actions which: (i) conduct, facilitate, authorize, or permit any text or data mining or web scraping, (ii) impose an unreasonable or disproportionately large load on our infrastructure, or detrimentally interfere with, intercept, or expropriate any system, data, or information; (iii) transmit or upload any material to the Services that contains viruses, Trojan horses, worms, or any other harmful or deleterious programs; (iv) attempt to gain unauthorized access to the Services, other  User Accounts not belonging to you, computer systems or networks connected to the Services, through password mining or any other means; 
- **Unlawful Activity:** Activity which would violate, or assist in the violation of, any law, statute, ordinance or regulation, sanctions programs administered in any of the countries where Trust Machines conducts business.
- **Abuse Other Users:** Interfere with another individual's access to or use of the Services; defame, abuse, extort, harass, stalk, threaten, or otherwise violate or infringe the legal or other rights (such as, but not limited to, rights of privacy, publicity, and intellectual property) of others; or harvest or otherwise collect information from the Services about others, including, without limitation, email addresses, without proper consent.
- **Fraud:** Activity which operates to defraud Trust Machines, Leather, any Wallet user(s) or any other person, or provide any false, inaccurate, or misleading information to Leather or Trust Machines.
- **Resale.** Activity that seeks to license, sell, rent, lease, transfer, assign, distribute, hosting, or otherwise commercially exploit the Services, whether in whole or in part, or any content displayed on the Services.
- **Intellectual Property Infringement.** Activity that infringes on or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under the law, or obscures any copyright, trademark or other proprietary notices or confidentiality legend on the Products.
- **Cyberattack.** Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including, but not limited to, the deployment of viruses, malicious code, and denial of service attacks.
- **Data Mining or Scraping.** Activity that involves data mining, robots, scraping, or similar data gathering or extraction methods of content or information from any of our Products.
- **Any Other Unlawful Conduct.** Activity that violates any applicable law, rule, or regulation of the United States or another relevant jurisdiction, including, but not limited to, the restrictions and regulatory requirements imposed by U.S. law.

7. ## Copyright and License to You

**Information Ownership**. Unless otherwise indicated in writing by us, the Services and all content and other materials contained therein, including, without limitation, the Leather logo and all designs, text, graphics, trademarks, pictures, information, data, software, sound files, and/or other files related thereto and/or associated therewith and the selection and arrangement thereof (collectively, “Content”) are and shall remain the sole and proprietary property of Leather or our affiliates or licensors, if and as applicable.

**Third Party Intellectual Property**. Notwithstanding anything to the contrary in these Terms, the Services and Content may include software components provided by Leather or its affiliates or a third party that are subject to separate license terms, in which case those license terms will govern the usage of such software components, as applicable.

**Third Party Services.** The Services may contain links to third-party websites (“Third-Party Websites”) and/or applications (“Third-Party Applications”). When you click on a link to a Third-Party Website or Third-Party Application, we will not warn you that you have left the Services and are subject to the terms and conditions (including privacy policies, if and as applicable) of another website or destination. Console provides these Third-Party Websites and Third-Party Applications only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites or Third-Party Applications or their products or services. You use all links in Third-Party Websites and Third-Party Applications at your own risk. 

**Limited License to You**. These Terms grant users a limited and non-exclusive right to use the Services, including all Content thereon. Except as indicated otherwise herein or in any additional terms or conditions, you may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, transmit, or otherwise exploit any of the Content on our Services, except as follows:

- Your device may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
- You may store files that are automatically cached by your web browser for display enhancement purposes.
- You may download a single copy of the mobile application to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.
- If we provide any “social media” features as part of the Services, you may take such actions as are enabled by such features and are consistent with these Terms.

You must not:

- Modify copies of any Content from the Services.
- Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials available through the Services.

If you wish to make any use of Content other than that set out in this Section, please address your request to:  contact\@leather.io.

8. ## Indemnification

To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless Trust Machines, and our respective past, present, and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors, and assigns (individually and collectively, the “Trust Machines Parties”), from and against all actual or alleged claims, damages, awards, judgments, losses, liabilities of every kind, and nature whatsoever, whether known or unknown, that are caused by, arise out of, or are related to (a) your use or misuse of the Services, (b) your violation of these Terms, and/or (c) your violation of any right(s) of any third party. You agree to promptly notify Trust Machines of any Claim(s) and shall cooperate fully with the Trust Machines Parties in defending such Claims. You further agree that the Trust Machines Parties shall have control of the defense or settlement of any third party Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER INDEMNITIES SET FORTH IN ANY WRITTEN AGREEMENT(S) BETWEEN YOU AND Trust Machines.

9. ## Disclaimer of Warranties and Limitation of Liability

EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY Leather or Trust Machines, THE SERVICES, CONTENT CONTAINED THEREIN, AND ANY DIGITAL ASSET(S) LISTED THEREIN ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. Leather (AND ITS AFFILIATE(S), LICENSOR(S) AND/OR OTHER BUSINESS ASSOCIATE(S)) MAKES NO WARRANTY THAT THE SERVICES: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL OR SAFE. Leather DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO THE SERVICES, CONTENT CONTAINED THEREIN. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.

YOU AGREE AND ACKNOWLEDGE THAT Leather HAS NO CONTROL OVER AND MAKES NO GUARANTEES OR PROMISES WITH RESPECT TO THE OWNERSHIP RECORD OR SMART CONTRACTS.  Leather MAKES NO OFFER OR INVITATION TO ACQUIRE, PURCHASE, TRANSFER, SELL, OR OTHERWISE DEAL IN TOKENS OR OTHER DIGITAL ASSETS.  YOU WAIVE ANY AND ALL RIGHTS AND CLAIMS YOU MAY HAVE, WHETHER KNOWN OR UNKNOWN AGAINST Leather(AND ANY RELATED PARTIES) RELATED TO THE SERVICES. 

TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL Trust Machines OR ITS AFFILIATES, OR ITS OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, CONTRACTORS, AGENTS, OFFICERS, OR DIRECTORS, BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, LOSS OF DIGITAL ASSETS, LOSS OF PRIVATE KEY, LOSS OF SEED PHRASE, LOSS OF ACCESS TO ANY  DIGITAL WALLET, OR ANY OTHER DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING BUT NOT LIMITED TO ANY CONTENT ON THE SERVICES OR ANY OTHER WEBSITES AND MOBILE APPLICATIONS OR ANY ITEMS OBTAINED THROUGH THE SERVICES OR SUCH OTHER WEBSITES AND MOBILE APPLICATIONS, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.

IN NO EVENT WILL Leather’s AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES, THE ACCESS TO AND USE OF THE SERVICE, CONTENT, DIGITAL ASSETS OR ANY PRODUCTS OR SERVICES PURCHASED ON THE SERVICES EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT RECEIVED BY Leather FROM THE SALE OF DIGITAL ASSETS THAT ARE THE SUBJECT OF THE APPLICABLE CLAIM.

ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM SHALL BE DEEMED PERMANENTLY WAIVED AND BARRED.

THIS SECTION DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE EXTENT PERMITTED BY LAW, THEREBY MINIMIZING OUR LIABILITY TO YOU TO THE LOWEST AMOUNT PERMITTED BY APPLICABLE LAW.

10. ## Miscellaneous

**Governing Law and Venue**. These Terms, your access to and use of the Services and Content, and your participation in the Services, shall be governed by and construed and enforced in accordance with the laws of the State of Delaware, without regard to conflict of law rules or principles of the State of Delaware, or any other jurisdiction that would cause the application of the laws of any other jurisdiction. Any dispute between the parties that is not subject to arbitration or cannot be heard in small claims court, shall be resolved in the state or federal courts sitting in the State of Delaware. However, as a consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident and nothing in these Terms affects your rights as a consumer to rely on such mandatory provisions of local law.

**Severability**. If any term, clause or provision of these Terms is held invalid or unenforceable, then that term, clause, or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause, or provision, or any other term, clause, or provision of these Terms.

**Waiver**. If we fail to insist that you perform any of your obligations under these Terms, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations.  If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.

**Assignability**. These Terms are personal to you, and are not assignable, transferable, or sublicensable by you except with Trust Machines’ prior written consent.

**Notices**. All notices under these Terms will be in writing and will be deemed to have been duly given when received, if personally delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery by recognized overnight delivery service.

11. ##  Contact us 

If you have any questions or complaints about our Services or these Terms, please email us at contact@leather.io or write to us at Leather c/o Nassau Machines Inc., 228 Park Avenue South, #63011, New York, NY 10003
`;

export const Terms: React.FC = () => {
  const history = useHistory();
  useBackButton(null);
  return (
    <Onboarding maxWidth="800px" px="base-loose">
      <OnboardingTitle mb="base" mt="extra-loose">
        Terms of Service
      </OnboardingTitle>
      <OnboardingText mb="extra-loose">
        You must first accept the terms of service before using Leathers
      </OnboardingText>
      {/* Converted from https://gdoc2md.com/ */}
      <ReactMarkdown
        children={terms}
        components={{
          a({ children, href }) {
            return (
              <Text
                as="a"
                href={href}
                textDecoration="underline"
                onClick={() => {
                  console.log(href);
                  openExternalLink(href ?? '');
                }}
              >
                {children}
              </Text>
            );
          },
          h2({ children }) {
            return (
              <Text textStyle="display.small" mt="extra-loose" mb="base">
                {children}
              </Text>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
      <Flex justifyContent="center" alignItems="center" mt="extra-loose" pb="120px">
        <Flex width="100%">
          <OnboardingButton onClick={() => main.closeWallet()} mode="secondary">
            Close
          </OnboardingButton>
          <OnboardingButton
            onClick={() => history.push(routes.REQUEST_DIAGNOSTICS)}
            ml="base"
            data-test={OnboardingSelector.BtnAcceptTerms}
          >
            I accept
          </OnboardingButton>
        </Flex>
      </Flex>
    </Onboarding>
  );
};
