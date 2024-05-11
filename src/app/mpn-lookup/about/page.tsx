'use client';

import React from 'react';
import { lusitana} from '@/app/ui/fonts';

export default function AboutForm() {
  return (
    <div
      id="aboutdiv"
      style={{
        borderRight: 'solid',
        marginRight: '5px',
        paddingRight: '15px',
      }}
      className={`${lusitana.className} text-lg` }
    >
      <div style={{ textAlign: 'left' }} data-testid={'about-text-id'}>
        Some folks work in water testing facilities that

        utilize the Idexx <a
        data-testid={'qtlink'}
        style={{ color: 'teal' }}
        href="https://www.idexx.com/en/water/water-products-services/quanti-tray-system/"
      >
        QuantiTray&reg; System
      </a> for their analysis on water samples.
        <br/>
        <br/>
        To use the results of the incubator, a technician
        will need to count the positive sample wells, and then
        cross reference one of three PDF files with the
        corresponding MPN and related 95% confidence range.
        Here is a link to the pdf related to the &nbsp;
        <a
          data-testid={'pdf-testid'}
          style={{ color: 'teal' }}
          href="https://www.idexx.com/files/qt97mpntable.pdf"
        >
          QuantiTray2000&reg;
        </a>
        , which is the largest one.
        <br/>
        <br/>

        Allegedly created to be helpful in the tedious process of looking up the MPN
        related to positive flourescing cells in an incubated sample, the <a
        data-testid={'mpngen'}
        style={{ color: 'teal' }}
        href="https://www.idexx.com/en/water/resources/mpn-generator/"
        >
        MPN Generator
        </a> was created.
        <br/>


        A Desktop solution to be installed on your Windows machine...

        well you can read about it at that link for the revised version,

        but a tl;dr summary would be that this particular software was written

        without any planning, research, or demand, so that one engineer

        could practice with Delphi C back in the 1990s.

        This has been referred to in the past as &quot;Deanware&quot; at this

        particular sales and manufacturing organization.


        A decade after the buggy implementation was released to

        the public - The confidence range values were coded in backwards,

        the save drive was hardcoded as E: despite many people not having

        an E: drive set up, etc...- the types of problems requirements

        gathering, testing and debugging would have caught/prevented.


        Anyway this is getting way too long so to cut short my justification

        for writing this app other than learning to use React. This is a usable

        implementation of that prior desktop app that needlessly overcomplicates

        the task it is supposed to be helping with.


        <div data-testid={'last-sentence-testid'}>
          Hope this is useful to the three of you that need it.
        </div>
      </div>
    </div>
  );
}
